<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return redirect()->route('web.books.index');
    }

    public function homeAdmin()
    {
        return inertia('Dashboard/Dashboard');
    }
}
