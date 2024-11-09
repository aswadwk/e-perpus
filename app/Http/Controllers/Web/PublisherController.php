<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Publisher;
use Illuminate\Http\Request;

class PublisherController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Publisher/Publisher', [
            'publishers' => Publisher::orderBy('id', 'desc')
                ->when($request->search, function ($query) use ($request) {
                    $query->where('name', 'like', "%$request->search%");
                })
                ->paginate(10)
        ]);
    }

    public function create()
    {
        return inertia('Publisher/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'code' => ['required', 'string', 'unique:publishers'],
            'name' => ['required', 'string'],
            'is_verified' => ['required', 'boolean'],
        ]);

        Publisher::create($request->all());

        return redirect()->route('web.publishers.index');
    }


    public function edit($id)
    {
        return inertia('Publisher/Edit', [
            'publisher' => Publisher::findOrFail($id)
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'code' => ['required', 'string', 'unique:publishers,code,' . $id],
            'name' => ['required', 'string'],
            'is_verified' => ['required', 'boolean'],
        ]);

        Publisher::findOrFail($id)->update($request->all());

        return redirect()->route('web.publishers.index');
    }

    public function destroy($id)
    {
        Publisher::findOrFail($id)->delete();

        return redirect()->route('web.publishers.index');
    }
}
