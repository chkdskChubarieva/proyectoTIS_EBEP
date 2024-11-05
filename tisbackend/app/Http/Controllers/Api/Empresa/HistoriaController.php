<?php

namespace App\Http\Controllers\Api\Empresa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\models\HistoriaUsuario;
use App\models\ProductBacklog;
class HistoriaController extends Controller
{   
        /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function crearHistoria(Request $request)
    {
        $response = ["success"=>false];
        // Validaciones

        $validator = Validator::make($request->all(), [
            "desc_historia"=> "required",
            "titulo"=> "required",
          //  "ID_pb"=> "required",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "error" => true,
                "messages" => $validator->errors()
            ], 400); // 400 Bad Request indica un error de validación
        }
        
        
        $input = $request->all();
        // Cifrar la contraseña
        // Insertar datos en la tabla 'users'

        
        $historia = HistoriaUsuario::create([
            'titulo' => $input['titulo'],
            'desc_historia' => $input['desc_historia'],
            'ID_sprint' => $input['ID_sprint'] ?? null,
            'ID_pb' => $request['ID_pb']->ID_pb,
        ]);

        $historia->save();
        

        // Asignar el rol de estudiante al usuario creado
        $response["success"] = true;
        //$response["token"] = $user->createToken("Tis")->plainTextToken;
        return response()->json($response, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
