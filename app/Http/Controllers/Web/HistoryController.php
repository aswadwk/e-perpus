<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Borrow;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Histories/Histories', [
            'histories' => Borrow::with(['book', 'user'])
                ->where('user_id', auth('web')->user()->id)
                ->orderBy('id', 'desc')->paginate(10),
        ]);
    }
}
