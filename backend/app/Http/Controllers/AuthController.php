<?php

namespace App\Http\Controllers;
use App\Http\Requests\LogInRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Session\Middleware\StartSession;

class AuthController extends Controller{

    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        return response()->json($user, 201);
    }
    
    public function login(LogInRequest $request)
    {
        if (\Auth::attempt($request->validated())) {
            $request->session()->regenerate();
            $cookie = cookie('laravel_session', $request->session()->getId(), 60, null, null, true, true);
            return response()->json([
                'user' => Auth::user(),
            ])->withCookie($cookie);
        }

        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }
    
    public function logout()
    {
        if (!\Auth::check()) {
            return response()->noContent();
        }

        \Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();
        return response()->noContent();
    }
    
    public function me()
    {
        if (!\Auth::check()) {
            return response()->json([
                'message' => 'Unauthenticated'
            ], 401);
        }

        return response()->json(\Auth::user());
    }

}
