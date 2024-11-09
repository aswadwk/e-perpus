<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Category/Category', [
            'categories' => Category::when($request->search, function ($query, $search) {
                return $query->where('name', 'like', "%$search%");
            })->orderBy('created_at', 'desc')->paginate(10),
        ]);
    }

    public function create()
    {
        return inertia('Category/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:255',
        ]);

        // check if code is already exist
        if (Category::where('code', $request->code)->exists()) {
            throw ValidationException::withMessages([
                'code' => 'Kode sudah digunakan.',
            ]);
        }

        Category::create($request->all());

        return redirect()->route('web.categories.index');
    }

    public function edit($id)
    {
        return inertia('Category/Edit', [
            'category' => Category::findOrFail($id),
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:255',
        ]);

        // check if code is already exist
        if (Category::where('code', $request->code)->where('id', '!=', $id)->exists()) {
            throw ValidationException::withMessages([
                'code' => 'Kode sudah digunakan.',
            ]);
        }

        Category::findOrFail($id)->update($request->all());

        return redirect()->route('web.categories.index');
    }

    public function destroy($id)
    {
        Category::findOrFail($id)->delete();

        return redirect()->route('web.categories.index');
    }
}
