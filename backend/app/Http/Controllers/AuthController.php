<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller{

    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);
    
        $this->guard()->login($user);
    
        return redirect()->intended('home');
    }
    
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string',
        ]);
    
        $credentials = $request->only('email', 'password');
    
        if ($this->guard()->attempt($credentials)) {
            return redirect()->intended('home');
        }
    
        return back()->withErrors([
            'email' => 'As credenciais fornecidas não são válidas.',
        ]);
    }
    
    public function logout()
    {
        $this->guard()->logout();
    
        return redirect('/');
    }
    
    public function me()
    {
        return response()->json($this->guard()->user());
    }

}
