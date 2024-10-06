<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Borrow;
use App\Models\Publisher;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return redirect()->route('web.books.index');
    }

    public function homeAdmin()
    {
        return inertia('Dashboard/Dashboard', [
            "summaries" => [
                "book" => Book::count(),
                "user" => User::where('role', 'user')->count(),
                "publisher" => Publisher::count(),
                'borrow' => Borrow::where('status', 'pending')->count(),
            ],
        ]);
    }
}
