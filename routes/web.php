<?php

use App\Http\Controllers\Web\AuthController;
use App\Http\Controllers\Web\DashboardController;
use App\Http\Controllers\Web\MemberController;
use Illuminate\Support\Facades\Route;

// Auth
Route::controller(AuthController::class)
    ->middleware("guest:web")
    ->group(function () {
        Route::get('auth/login', 'login')->name('login');
        Route::post('auth/login', 'doLogin')->name('web.auth.doLogin');
    });

Route::controller(AuthController::class)
    ->middleware("auth:web")
    ->group(function () {
        Route::post('auth/logout', 'doLogout')->name('web.auth.logout');
    });

Route::controller(DashboardController::class)
    ->middleware("auth:web")
    ->group(function () {
        Route::get('/home', 'index')->name('web.home');
    });

Route::controller(MemberController::class)
    ->middleware("auth:web")
    ->group(function () {
        Route::get('/members', 'index')->name('web.members.index');
        Route::get('/members/create', 'create')->name('web.members.create');
        Route::post('/members/store', 'store')->name('web.members.store');
        Route::get('/members/{id}/edit', 'edit')->name('web.members.edit');
        Route::put('/members/{id}/update', 'update')->name('web.members.update');
        Route::delete('/members/{id}/delete', 'destroy')->name('web.members.destroy');
    });
