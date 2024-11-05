<?php

namespace App\Http\Controllers\Api\Docente;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Docente;
use Illuminate\Http\JsonResponse;

class DocenteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getInfoDoc() {
        $user = Auth::user();
        return response()->json([
            'nombre' => $user->nombre,
            'apellido' => $user->apellido,
            'correo' => $user->correo, 
            'nombre_usuario'=> $user->docente->nombre_usuario,
        ]);
    }

    public function index(): JsonResponse
    {
        $docentes = Docente::with('user')->get();

        return response()->json([
            'success' => true,
            'data' => $docentes,
        ]);
    }

    public function show(int $id): JsonResponse
    {
        $docente = Docente::with('user')->find($id);

        if (!$docente) {
            return response()->json(['success' => false, 'message' => 'Docente no encontrado.'], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $docente,
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    
}
