<?php

namespace App\Http\Controllers;

use App\Models\Grade;
use Illuminate\Http\Request;

class GradeController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Grade/Grade', [
            'grades' => Grade::orderBy('created_at', 'desc')->paginate(10),
        ]);
    }

    public function create()
    {
        return inertia('Grade/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'        => 'required',
            'description' => 'required',
        ]);

        Grade::create([
            'name'        => $request->name,
            'description' => $request->description,
        ]);

        return redirect()->route('web.grades.index');
    }

    public function edit($gradeId)
    {
        return inertia('Grade/Edit', [
            'member' => Grade::findOrFail($gradeId),
        ]);
    }

    public function update(Request $request, $gradeId)
    {
        $request->validate([
            'name'        => 'required',
            'description' => 'required',
        ]);

        $grade = Grade::findOrFail($gradeId);
        $grade->update([
            'name'        => $request->name,
            'description' => $request->description,
        ]);

        return redirect()->route('web.grades.index');
    }

    public function destroy($gradeId)
    {
        $grade = Grade::findOrFail($gradeId);
        $grade->delete();

        return redirect()->route('web.grades.index');
    }
}
