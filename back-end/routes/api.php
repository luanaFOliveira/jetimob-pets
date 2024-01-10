<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/pets', [AnimalController::class, 'store']);
Route::get('/pets', [AnimalController::class, 'index']);
Route::get('/pets/{id}', [AnimalController::class, 'show']);
Route::put('/pets/{id}', [AnimalController::class, 'update']);
Route::delete('/pets/{id}', [AnimalController::class, 'destroy']);

