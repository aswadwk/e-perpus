<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login()
    {
        return inertia('Auth/Login');
    }

    public function register()
    {
        return view('auth.register');
    }

    public function doLogin(Request $request)
    {
        $credentials = $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        if (auth('web')->attempt($credentials)) {
            $request->session()->regenerate();

            // dd(auth('web')->user()->role);
            // check if user is admin
            if (auth('web')->user()->role === 'admin' || auth('web')->user()->role === 'super admin') {
                return redirect()->intended('/admin/home');
            }

            return redirect()->intended('/');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function doLogout(Request $request)
    {
        auth('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('login');
    }

    public function setting()
    {
        return inertia('Setting/Setting');
    }

    public function update(Request $request)
    {
        $request->validate([
            'name'         => ['nullable', 'string', 'max:255', 'min:3'],
            'old_password' => ['nullable', 'string'],
            'password'     => ['nullable', 'string', 'min:8'],
        ]);

        // check if all null
        if (!$request->filled('name') && !$request->filled('old_password') && !$request->filled('password')) {
            return redirect()->back();
        }

        $user = auth('web')->user();

        if ($request->filled('name')) {
            if ($user->name !== $request->name) {
                $user->name = $request->name;
            }

            User::where('id', $user->id)->update(['name' => $request->name]);
        }

        if ($request->filled('old_password') && $request->filled('password')) {
            if (Hash::check($request->old_password, $user->password)) {
                User::where('id', $user->id)->update(['password' => Hash::make($request->password)]);
            } else {
                return back()->withErrors([
                    'old_password' => 'The provided password does not match our records.',
                ]);
            }
        }

        return redirect()->back();
    }
}
