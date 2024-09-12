<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // return inertia('Dashboard/Dashboard');
        // return inertia('Books/Books');

        return redirect()->route('web.books.index');
    }
}
