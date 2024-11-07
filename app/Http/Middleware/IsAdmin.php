<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $auth = auth('web')->user();

        if (!$auth) {
            return redirect()->route('login');
        }

        if ($auth->role === 'admin' || $auth->role === 'super admin') {
            return $next($request);
        }

        return redirect()->route('web.home');
    }
}
