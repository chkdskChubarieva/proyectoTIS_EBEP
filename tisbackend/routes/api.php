<?php

use App\Http\Controllers\Api\FrontController;
use Illuminate\Http\Request;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Estudiante\EmpresaController;
use App\Http\Controllers\Api\Docente\EmpresaController as EmpresaDocente;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;
use App\Http\Controllers\Api\Estudiante\EstudianteController;
use App\Http\Controllers\Api\Docente\DocenteController;
use App\Http\Controllers\Api\GrupoEmpresaController;
use App\Http\Controllers\Api\TareaController;



//Rutas publicas
Route::prefix('v1')->group(function () {
    
    //:public
    //Route::get('list', [FrontController::class, 'list']);
    //:auth
    Route::post("/auth/register", [AuthController::class, 'register']);
    Route::post("/auth/registerDoc", [AuthController::class, 'registerDoc']);
    Route::post("/auth/login", [AuthController::class, 'login']);
    Route::post("/auth/loginDoc", [AuthController::class, 'loginDoc']);   
    
    Route::post("/grupo-empresa/register", [GrupoEmpresaController::class, 'store']);
    Route::get('/grupo-empresa/check-code/{code}', [GrupoEmpresaController::class, 'checkCode']);
    Route::get('/tareas', [TareaController::class, 'tareas']);
  
    Route::get('/docentes', [DocenteController::class, 'index']);
    Route::get('/docentes/{id}', [DocenteController::class, 'show']);
    Route::get('/grupo-empresa/data/{code}', [GrupoEmpresaController::class, 'getGroupData']);

    Route::post('/grupo-empresa/join', [GrupoEmpresaController::class, 'joinGroup']);

    Route::put('/estudiantes/{id}/grupo-empresa', [EstudianteController::class, 'updateGrupoEmpresa']);
    Route::middleware('auth:sanctum')->get('/auth/user', [AuthController::class, 'getAuthenticatedUser']);

    //Rutas privadas
    Route::group(['middleware' => 'auth:sanctum'], function () {
        //:: rol estudiante
        //Route::apiResource('/estudiante/getInfoEst', EstudianteController::class);
        Route::get('/estudiante/getInfoEst', [EstudianteController::class, 'getInfoEst']);
        Route::apiResource('/estudiante/empresa', EmpresaController::class);

        //:: rol docente
        Route::get('/docente/getInfoDoc', [DocenteController::class, 'getInfoDoc']);
        Route::apiResource('/docente/empresa', EmpresaDocente::class);

        //::auth
        Route::post('/auth/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
    });
});

Route::middleware([
    EnsureFrontendRequestsAreStateful::class,
    'auth:sanctum'
])->get('/user', function (Request $request) {
    return $request->user();
});

//Route::middleware(['cors'])->group(function () {
    //Route::get('/example', 'ExampleController@index');
//});