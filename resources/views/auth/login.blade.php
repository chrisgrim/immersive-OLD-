@extends('layouts.master')

@section('content')
<div class="login-container">
    <div>
        <div>
<div class="white-cover-top">
test
</div>
<div>
<div class="white-cover-bottom">
test
</div>

            <div class="login">
                <div class="login-block">
                    <div class="welcome">
                        Welcome to
                    </div>
                    <div class="login-header">
                        <h1> Everything </h1>
                        <h1> Immersive </h1>
                    </div>
                    <div class="floating-form">
                        <form method="POST" action="{{ route('login') }}">
                            @csrf

                            <div class="create-field">
                                <input 
                                id="email" 
                                type="email" 
                                class="create-input loginfield @error('email') is-invalid @enderror" 
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
                                class="create-input loginfield @error('password') is-invalid @enderror" 
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

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                        <label class="form-check-label" for="remember">
                                            {{ __('Remember Me') }}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Login') }}
                                    </button>

                                    @if (Route::has('password.request'))
                                        <a class="btn btn-link" href="{{ route('password.request') }}">
                                            {{ __('Forgot Your Password?') }}
                                        </a>
                                    @endif
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
