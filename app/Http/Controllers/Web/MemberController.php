<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use App\Models\User;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Member/Member', [
            'members' => User::with(['grade'])
                ->where('role', 'user')
                ->when($request->search, function ($query, $search) {
                    return $query->where('name', 'like', "%$search%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(10),
        ]);
    }

    private function generateCode()
    {
        $count = User::count();

        return 'AB' . str_pad($count + 1, 3, '0', STR_PAD_LEFT);
    }

    public function create()
    {
        return inertia('Member/Create', [
            'code'   => $this->generateCode(),
            'grades' => Grade::orderBy('name', 'desc')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'code'     => ['required', 'string'],
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'grade_id' => ['required', 'integer', 'exists:grades,id'],
            'password' => ['required', 'string', 'min:8'],
            'username' => ['required', 'string', 'max:255', 'unique:users'],
            'nis'      => ['required', 'string', 'max:255'],
            'address'  => ['nullable', 'string', 'max:255'],
        ]);

        // Check if the code is already used
        if (User::where('code', $request->code)->exists()) {
            return back()->withErrors(['code' => 'Kode sudah digunakan']);
        }

        User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => bcrypt($request->password),
            'username' => $request->username,
            'role'     => 'user',
            'nis'      => $request->nis,
            'address'  => $request->address,
            'code'     => $request->code,
            'grade_id' => $request->grade_id,
        ]);

        return redirect()->route('web.members.index');
    }

    public function edit($id)
    {
        return inertia('Member/Edit', [
            'member' => User::findOrFail($id),
            'grades' => Grade::orderBy('name', 'desc')->get(),
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $id],
            'grade_id' => ['required', 'integer', 'exists:grades,id'],
            'password' => ['nullable', 'string', 'min:8'],
            'username' => ['required', 'string', 'max:255', 'unique:users,username,' . $id],
            'nis'      => ['required', 'string', 'max:255'],
            'address'  => ['nullable', 'string', 'max:255'],
        ]);

        $member = User::findOrFail($id);

        $member->update([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => $request->password ? bcrypt($request->password) : $member->password,
            'username' => $request->username,
            'nis'      => $request->nis,
            'address'  => $request->address,
            'grade_id' => $request->grade_id,
        ]);

        return redirect()->route('web.members.index');
    }

    public function destroy($id)
    {
        User::findOrFail($id)->delete();

        return redirect()->route('web.members.index');
    }
}
