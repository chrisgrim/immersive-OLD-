@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}} - login</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection 

@section('content')
<div class="login-container">
    <div>
        <div>
            <div class="login">
                <div class="login-block">
                    <div class="welcome">
                        Welcome to
                    </div>
                    <div class="login-header">
                        <h1> Everything </h1>
                        <h1> Immersive </h1>
                    </div>
                    <div class="">
                        <form method="POST" action="{{ route('login') }}">
                            @csrf
                            <div class="create-field">
                                <input 
                                id="email" 
                                type="email" 
                                class="general field @error('email') is-invalid @enderror" 
                                name="email" 
                                value="{{ old('email') }}" 
                                required 
                                placeholder="email" 
                                autocomplete="email" 
                                autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="create-field">
                                <input 
                                id="password" 
                                type="password" 
                                class="general field @error('password') is-invalid @enderror" 
                                name="password" 
                                required
                                placeholder="password" 
                                autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="remem">
                                <div class="">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                                @if (Route::has('password.request'))
                                    <a class="forget" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                            <div class="">
                                <button type="submit" class="submit">
                                    {{ __('Login') }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
