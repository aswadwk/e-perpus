<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\GradeController;
use App\Http\Controllers\Web\AuthController;
use App\Http\Controllers\Web\BookController;
use App\Http\Controllers\Web\CategoryController;
use App\Http\Controllers\Web\DashboardController;
use App\Http\Controllers\Web\HistoryController;
use App\Http\Controllers\Web\MemberController;
use App\Http\Controllers\Web\PublisherController;
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
        Route::get('/setting', 'setting')->name('web.auth.setting');
        Route::post('/setting/update', 'update')->name('web.auth.update');
    });

Route::controller(DashboardController::class)
    ->middleware("is.admin")
    ->group(function () {
        Route::get('/admin/home', 'homeAdmin')->name('web.admin.home');
    });

Route::controller(DashboardController::class)
    ->middleware("auth:web")
    ->group(function () {
        Route::get('/', 'index')->name('web.home');
    });

Route::controller(AdminController::class)
    ->middleware("is.admin")
    ->group(function () {
        Route::get('/admin/admins', 'index')->name('web.admins.index');
        Route::get('/admin/admins/create', 'create')->name('web.admins.create');
        Route::post('/admin/admins/store', 'store')->name('web.admins.store');
        Route::get('/admin/admins/{id}/edit', 'edit')->name('web.admins.edit');
        Route::put('/admin/admins/{id}/update', 'update')->name('web.admins.update');
        Route::delete('/admin/admins/{id}/delete', 'destroy')->name('web.admins.destroy');
    });

Route::controller(MemberController::class)
    ->middleware("is.admin")
    ->group(function () {
        Route::get('/admin/members', 'index')->name('web.members.index');
        Route::get('/admin/members/create', 'create')->name('web.members.create');
        Route::post('/admin/members/store', 'store')->name('web.members.store');
        Route::get('/admin/members/{id}/edit', 'edit')->name('web.members.edit');
        Route::put('/admin/members/{id}/update', 'update')->name('web.members.update');
        Route::delete('/admin/members/{id}/delete', 'destroy')->name('web.members.destroy');
    });

Route::controller(GradeController::class)
    ->middleware("is.admin")
    ->group(function () {
        Route::get('/admin/grades', 'index')->name('web.grades.index');
        Route::get('/admin/grades/create', 'create')->name('web.grades.create');
        Route::post('/admin/grades/store', 'store')->name('web.grades.store');
        Route::get('/admin/grades/{id}/edit', 'edit')->name('web.grades.edit');
        Route::put('/admin/grades/{id}/update', 'update')->name('web.grades.update');
        Route::delete('/admin/grades/{id}/delete', 'destroy')->name('web.grades.destroy');
    });

Route::controller(CategoryController::class)
    ->middleware("is.admin")
    ->group(function () {
        Route::get('/admin/categories', 'index')->name('web.categories.index');
        Route::get('/admin/categories/create', 'create')->name('web.categories.create');
        Route::post('/admin/categories/store', 'store')->name('web.categories.store');
        Route::get('/admin/categories/{id}/edit', 'edit')->name('web.categories.edit');
        Route::put('/admin/categories/{id}/update', 'update')->name('web.categories.update');
        Route::delete('/admin/categories/{id}/delete', 'destroy')->name('web.categories.destroy');
    });


Route::controller(PublisherController::class)
    ->middleware("is.admin")
    ->group(function () {
        Route::get('/admin/publishers', 'index')->name('web.publishers.index');
        Route::get('/admin/publishers/create', 'create')->name('web.publishers.create');
        Route::post('/admin/publishers/store', 'store')->name('web.publishers.store');
        Route::get('/admin/publishers/{id}/edit', 'edit')->name('web.publishers.edit');
        Route::put('/admin/publishers/{id}/update', 'update')->name('web.publishers.update');
        Route::delete('/admin/publishers/{id}/delete', 'destroy')->name('web.publishers.destroy');
    });


Route::controller(BookController::class)
    ->middleware("auth:web")
    ->group(function () {
        // Admin
        Route::get('/admin/books', 'adminBook')->name('web.books.admin');
        Route::get('/admin/books/create', 'create')->name('web.books.create');
        Route::post('/admin/books/store', 'store')->name('web.books.store');
        Route::get('/admin/books/{id}/edit', 'edit')->name('web.books.edit');
        Route::put('/admin/books/{id}/update', 'update')->name('web.books.update');
        Route::delete('/admin/books/{id}/delete', 'destroy')->name('web.books.destroy');

        // User
        Route::get('/books', 'index')->name('web.books.index');
        Route::post('books/{id}/borrow', 'borrow')->name('web.books.borrow');
    });

Route::controller(HistoryController::class)
    ->middleware("auth:web")
    ->group(function () {
        // Admin
        Route::get('/admin/histories', 'adminHistory')->name('web.histories.admin');
        Route::post('/admin/histories/{id}/update', 'update')->name('web.histories.update');

        // User
        Route::get('/histories', 'index')->name('web.histories.index');
    });
