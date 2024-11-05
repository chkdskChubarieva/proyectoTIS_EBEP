<?php

namespace App\Http\Controllers\Api\Estudiante;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Estudiante;

class EstudianteController extends Controller
{
    public function getInfoEst() {
        $user = Auth::user();
        //$estudiante = $user->estudiante;
       // $user_id = $user->id;
        //$estudiante = Estudiante::find(ID_usuario->ID_usuario);
        //$estudiante = Estudiante::where('ID_usuario',$user_id)->first();
        return response()->json([
            'nombre' => $user->nombre,
            'apellido' => $user->apellido,
            'correo' => $user->correo, 
            'cod_sis'=> $user->estudiante->cod_sis,
        ]);
    }


    public function updateGrupoEmpresa(Request $request, $id)
    {
        // Validar la entrada
        $request->validate([
            'ID_empresa' => 'required|exists:grupo_empresas,ID_empresa',
        ]);

        // Buscar al estudiante por su ID
        $estudiante = Estudiante::find($id);
        
        if (!$estudiante) {
            return response()->json(['message' => 'Estudiante no encontrado'], 404);
        }

        // Actualizar el ID de la empresa
        $estudiante->ID_empresa = $request->ID_empresa;
        $estudiante->save();

        return response()->json(['message' => 'ID de empresa actualizado exitosamente', 'estudiante' => $estudiante]);
    }
}