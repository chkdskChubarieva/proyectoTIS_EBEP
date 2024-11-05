<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\GrupoEmpresa;
use App\Models\ProductBacklog;
use Illuminate\Http\JsonResponse;

class GrupoEmpresaController extends Controller
{
    public function store(Request $request)
    {
        $grupoEmpresa = GrupoEmpresa::create([
            'nombre_empresa' => $request->nombre_empresa,
            'correo_empresa' => $request->correo_empresa,
            'nombre_representante' => $request->nombre_representante,
            'telf_representante' => $request->telf_representante,
            'ID_docente' => $request->ID_docente,
            'codigo' => $request->codigo,
            'logo_empresa' => $request->logo_empresa
        ]);
        //ProductBacklog::create([
       //     'ID_empresa' => $grupoEmpresa->ID_empresa, // Relacionar con la tabla 'users'
       // ]);




        // $estudiante = Estudiante::where('ID_usuario', auth()->id())->first();
        // if ($estudiante) {
        //     $estudiante->ID_empresa = $grupoEmpresa->ID_empresa;
        //     $estudiante->save();
        // }
        
        return response()->json([
            'success' => true,
            'data' => $grupoEmpresa
        ], 201);
        
    }

    public function getGroupData($code): JsonResponse
    {
        try {
            $grupoEmpresa = GrupoEmpresa::where('codigo', $code)->first();
    
            if (!$grupoEmpresa) {
                return response()->json(['error' => 'Grupo empresa no encontrado'], 404);
            }
    
            return response()->json($grupoEmpresa);
        } catch (\Exception $e) {
            \Log::error("Error en getGroupData: " . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }

    public function checkCode($code): JsonResponse
    {
        \Log::info("Código recibido: $code");
    
        $exists = GrupoEmpresa::where('codigo', $code)->exists();
    
        return response()->json(['isUnique' => !$exists]);
    }
    
    public function joinGroup(Request $request)
    {
        $request->validate([
            'codigo' => 'required|string',
            'ID_usuario' => 'required|integer|exists:users,ID_usuario'
        ]);
    
        $grupoEmpresa = GrupoEmpresa::where('codigo', $request->codigo)->first();
    
        if (!$grupoEmpresa) {
            return response()->json(['success' => false, 'message' => 'Código de grupo no válido.'], 400);
        }
    
        $estudiante = Estudiante::where('ID_usuario', $request->ID_usuario)->first();
        if (!$estudiante) {
            return response()->json(['success' => false, 'message' => 'Estudiante no encontrado.'], 404);
        }
    
        $estudiante->ID_empresa = $grupoEmpresa->ID_empresa;
        $estudiante->save();
    
        return response()->json(['success' => true, 'message' => 'Te has unido al grupo-empresa exitosamente.']);
    }
    
}
