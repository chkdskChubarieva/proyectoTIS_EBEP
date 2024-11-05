<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\FrontController;
// use Spatie\Permission\Models\Role;

// $role = Role::create(['name' => 'estudiante']);
// $role = Role::create(['name' => 'docente']);

Route::get('{any}', function () {
    return view('welcome');
})->where('any', '.*');



//Route::get('list', [FrontController::class, 'list']);
