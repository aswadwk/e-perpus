<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function index()
    {
        return inertia('Member/Member', [
            'members' => User::where('role', 'user')
                ->orderBy('created_at', 'desc')
                ->paginate(10),
        ]);
    }

    public function create()
    {
        return inertia('Member/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'username' => ['required', 'string', 'max:255', 'unique:users'],
            'nis' => ['required', 'string', 'max:255'],
            'address' => ['nullable', 'string', 'max:255'],
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'username' => $request->username,
            'role' => 'user',
            'nis' => $request->nis,
            'address' => $request->address,
            'code' => rand(100000, 999999),
        ]);

        return redirect()->route('web.members.index');
    }

    public function edit($id)
    {
        return inertia('Member/Edit', [
            'member' => User::findOrFail($id),
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $id],
            'password' => ['nullable', 'string', 'min:8'],
            'username' => ['required', 'string', 'max:255', 'unique:users,username,' . $id],
            'nis' => ['required', 'string', 'max:255'],
            'address' => ['nullable', 'string', 'max:255'],
        ]);

        $member = User::findOrFail($id);

        $member->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password ? bcrypt($request->password) : $member->password,
            'username' => $request->username,
            'nis' => $request->nis,
            'address' => $request->address,
        ]);

        return redirect()->route('web.members.index');
    }

    public function destroy($id)
    {
        User::findOrFail($id)->delete();

        return redirect()->route('web.members.index');
    }
}
