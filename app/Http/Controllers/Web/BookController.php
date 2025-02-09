<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Borrow;
use App\Models\Category;
use App\Models\Publisher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class BookController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Books/Books', [
            'books' => Book::with(['category', 'publisher'])
                ->when(isset($request->search), function ($query) use ($request) {
                    $query->where('title', 'like', "%$request->search%")
                        ->orWhere('author', 'like', "%$request->search%")
                        ->orWhere('isbn', 'like', "%$request->search%");
                })
                ->orderBy('id', 'desc')
                ->paginate(15),
            'recommendations' => $this->getRecommendations(auth('web')->user()->id),
        ]);
    }

    public function adminBook(Request $request)
    {
        return inertia('Books/AdminBook', [
            'books' => Book::with(['category', 'publisher'])
                ->when($request->search, function ($query) use ($request) {
                    $query->where('title', 'like', "%$request->search%");
                })
                ->orderBy('id', 'desc')->paginate(10),
        ]);
    }

    public function borrow(Request $request, $id)
    {
        $request->validate([
            'return_date' => ['required', 'date', 'after:today'],
            'fine'        => ['required', 'boolean'],
            'notes'       => ['nullable', 'string', 'max:255'],
        ]);

        $book = Book::find($id);

        if ($book->stock > 0) {
            try {
                DB::beginTransaction();

                Borrow::create([
                    'book_id'     => $book->id,
                    'user_id'     => auth('web')->user()->id,
                    'borrow_date' => now(),
                    'return_date' => $request->return_date,
                    'notes'       => $request->notes ?? null,
                    'fine'        => $request->fine ?? 0,
                    'status'      => 'pending',
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

    public function store(Request $request)
    {
        $request->validate([
            'code'           => ['nullable', 'string', 'unique:books'],
            'title'          => ['required', 'string'],
            'category_id'    => ['required', 'exists:categories,id'],
            'publisher_id'   => ['required', 'exists:publishers,id'],
            'stock'          => ['required', 'integer', 'min:0'],
            'price'          => ['required', 'numeric', 'min:0'],
            'is_available'   => ['nullable', 'boolean'],
            'isbn'           => ['required', 'string'],
            'author'         => ['required', 'string'],
            'description'    => ['nullable', 'string'],
            'year_published' => ['required', 'date_format:Y'],
            'cover'          => ['nullable', 'image', 'mimes:jpeg,png,jpg', 'max:10048'],
        ]);

        try {
            $slug = str()->slug($request->title);

            $request->merge([
                'slug'         => $slug,
                'is_available' => $request->is_available ?? true,
            ]);

            // check if isbn already exists
            $isbn = Book::where('isbn', $request->isbn)->exists();

            if ($isbn) {
                throw ValidationException::withMessages([
                    'isbn' => 'ISBN already exists',
                ]);
            }

            if ($request->hasFile('cover')) {
                // upload image
                $coverPath = $request->file('cover')->store('public/books');

                $request->merge([
                    'path_cover' => url('/') . Storage::url($coverPath),
                ]);
            }

            Book::create([
                'code'           => $request->code,
                'title'          => $request->title,
                'category_id'    => $request->category_id,
                'publisher_id'   => $request->publisher_id,
                'stock'          => $request->stock,
                'price'          => $request->price,
                'is_available'   => $request->is_available,
                'isbn'           => $request->isbn,
                'author'         => $request->author,
                'description'    => $request->description,
                'year_published' => $request->year_published,
                'cover'          => $request->path_cover,
                'slug'           => str()->slug($request->title),
            ]);

            return redirect()->route('web.books.admin');
        } catch (\Throwable $th) {

            throw $th;
        }
    }

    public function edit($id)
    {
        return inertia('Books/Edit', [
            'book'       => Book::with(['category', 'publisher'])->find($id),
            'categories' => Category::all(),
            'publishers' => Publisher::all(),
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'code'           => ['nullable', 'string', 'unique:books,code,' . $id],
            'title'          => ['required', 'string'],
            'category_id'    => ['required', 'exists:categories,id'],
            'publisher_id'   => ['required', 'exists:publishers,id'],
            'stock'          => ['required', 'integer', 'min:0'],
            'price'          => ['required', 'numeric', 'min:0'],
            'is_available'   => ['nullable', 'boolean'],
            'isbn'           => ['required', 'string'],
            'author'         => ['required', 'string'],
            'description'    => ['nullable', 'string'],
            'year_published' => ['required', 'date_format:Y'],
            'cover'          => ['nullable', 'image', 'mimes:jpeg,png,jpg', 'max:10048'],
        ]);

        try {

            // check if book exists
            $book = Book::findOrFail($id);

            // check if isbn already exists
            $isbn = Book::where('isbn', $request->isbn)->where('id', '!=', $id)->exists();

            if ($isbn) {
                throw ValidationException::withMessages([
                    'isbn' => 'ISBN already exists',
                ]);
            }

            // check if cover is updated
            if ($request->hasFile('cover')) {

                $cover = $request->file('cover');

                $coverPath = $cover->store('public/books');

                $request->merge([
                    // add base url
                    'new_cover' => url('/') . Storage::url($coverPath),
                ]);
            }

            Book::find($id)->update([
                'code'           => $request->code ?? $book->code,
                'title'          => $request->title ?? $book->title,
                'category_id'    => $request->category_id ?? $book->category_id,
                'publisher_id'   => $request->publisher_id ?? $book->publisher_id,
                'stock'          => $request->stock ?? $book->stock,
                'price'          => $request->price ?? $book->price,
                'is_available'   => $request->is_available ?? true,
                'isbn'           => $request->isbn ?? $book->isbn,
                'author'         => $request->author ?? $book->author,
                'description'    => $request->description ?? $book->description,
                'year_published' => $request->year_published ?? $book->year_published,
                'cover'          => $request->new_cover ?? $book->cover,
            ]);

            return redirect()->route('web.books.admin');
        } catch (\Throwable $th) {

            throw $th;
        }
    }

    public function destroy($id)
    {
        try {

            Book::find($id)->delete();

            return redirect()->route('web.books.admin');
        } catch (\Throwable $th) {

            throw $th;
        }
    }

    public function getRecommendations($userId, $topN = 5)
    {
        // Step 1: Collaborative Filtering
        $borrowedBookIds = Borrow::where('user_id', $userId)
            ->pluck('book_id')
            ->toArray();

        // mengambil buku yang dipinjam oleh user lain yang juga meminjam buku yang dipinjam oleh user saat ini
        $collaborativeBooks = Borrow::select('book_id', DB::raw('COUNT(*) as times_borrowed'))
            ->whereNotIn('book_id', $borrowedBookIds)
            ->whereIn('user_id', function ($query) use ($borrowedBookIds) {
                $query->select('user_id')
                    ->from(with(new Borrow)->getTable())
                    ->whereIn('book_id', $borrowedBookIds);
            })
            ->groupBy('book_id')
            ->orderBy('times_borrowed', 'desc')
            ->limit($topN)
            ->pluck('book_id');

        // Step 2: Content-based Filtering
        $preferredGenres = Book::whereIn('id', $borrowedBookIds)
            ->pluck('category_id')
            ->unique();

        // mengambil buku berdasarkan genre yang disukai user
        $contentBasedBooks = Book::whereIn('category_id', $preferredGenres)
            ->whereNotIn('id', $borrowedBookIds)
            ->limit($topN)
            ->pluck('id');

        // Combine recommendations
        $recommendedBooks = $collaborativeBooks->merge($contentBasedBooks)->unique()->take($topN);

        if ($recommendedBooks->count() < $topN) {
            $recommendedBooks = Book::whereNotIn('id', $borrowedBookIds)
                ->orderBy('year_published', 'desc')
                ->limit($topN)
                ->pluck('id');
        }

        return Book::with(['category', 'publisher'])
            ->whereIn('id', $recommendedBooks)
            ->get();
    }
}
