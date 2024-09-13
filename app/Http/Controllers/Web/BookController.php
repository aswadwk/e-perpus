<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Borrow;
use App\Models\Category;
use App\Models\Publisher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{
    public function index()
    {
        return inertia('Books/Books', [
            'books' => Book::with(['category', 'publisher'])
                ->orderBy('id', 'desc')->paginate(10),
        ]);
    }

    public function adminBook()
    {
        return inertia('Books/AdminBook', [
            'books' => Book::with(['category', 'publisher'])
                ->orderBy('id', 'desc')->paginate(10),
        ]);
    }

    public function borrow(Request $request, $id)
    {
        $request->validate([
            'return_date' => ['required', 'date', 'after:today'],
            'fine' => ['required', 'boolean'],
            'notes' => ['nullable', 'string', 'max:255'],
        ]);

        $book = Book::find($id);

        if ($book->stock > 0) {
            try {
                DB::beginTransaction();

                Borrow::create([
                    'book_id' => $book->id,
                    'user_id' => auth('web')->user()->id,
                    'borrow_date' => now(),
                    'return_date' => $request->return_date,
                    'notes' => $request->notes ?? null,
                    'fine' => $request->fine ?? 0,
                    'status' => 'pending',
                ]);

                DB::commit();

                return redirect()->route('web.books.index');
            } catch (\Throwable $th) {
                DB::rollBack();

                throw $th;
            }
        }

        return redirect()->back()->with('error', 'Stock out of book');
    }

    public function create()
    {
        return inertia('Books/Create', [
            'categories' => Category::all(),
            'publishers' => Publisher::all(),
        ]);
    }
}
