<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return inertia('Admin/Admin', [
            'members' => User::where('role', 'admin')
                ->orderBy('created_at', 'desc')
                ->paginate(10),
        ]);
    }

    public function create()
    {
        return inertia('Admin/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'     => 'required',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|min:8',
        ]);

        User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => bcrypt($request->password),
            'role'     => 'admin',
        ]);

        return redirect()->route('web.admins.index');
    }

    public function edit($adminId)
    {
        return inertia('Admin/Edit', [
            'member' => User::findOrFail($adminId),
        ]);
    }

    public function update(Request $request, $adminId)
    {
        $request->validate([
            'name'  => 'required',
            'email' => 'required|email|unique:users,email,' . $adminId,
            'password' => 'nullable|min:8',
        ]);

        $user = User::findOrFail($adminId);
        $user->update([
            'name'  => $request->name,
            'email' => $request->email,
            'password' => $request->password ? bcrypt($request->password) : $user->password,
        ]);

        return redirect()->route('web.admins.index');
    }

    public function destroy($adminId)
    {
        User::destroy($adminId);

        return redirect()->route('web.admins.index');
    }
}
