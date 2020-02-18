@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}} - Register</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection 

@section('content')
<div class="register">
    <div class="form">
        <div class="welcome">
            Become a part of
        </div>
        <div class="header">
            <h1> Everything </h1>
            <h1> Immersive </h1>
        </div>
        <div class="">
            <form method="POST" action="{{ route('register') }}">
                @csrf
                <div class="">
                    <div class="">
                        <input 
                        id="name" 
                        type="text" 
                        class="general field @error('name') is-invalid @enderror" 
                        name="name" 
                        value="{{ old('name') }}" 
                        required 
                        placeholder="Name" 
                        autocomplete="name" 
                        autofocus>
                        @error('name')
                            <span class="" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>

                <div class="">
                    <div class="">
                        <input 
                        id="email" 
                        type="email" 
                        class="general field @error('email') is-invalid @enderror" 
                        name="email" value="{{ old('email') }}" 
                        required
                        placeholder="Email" 
                        autocomplete="email">

                        @error('email')
                            <span class="" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>

                <div class="">
                    <div class="">
                        <input 
                        id="password" 
                        type="password" 
                        class="general field  @error('password') is-invalid @enderror" 
                        name="password" 
                        required 
                        placeholder="Password" 
                        autocomplete="new-password">

                        @error('password')
                            <span class="" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>

                <div class="">
                    <div class="">
                        <input 
                        id="password-confirm" 
                        type="password" 
                        class="general field" 
                        placeholder="Confirm Password" 
                        name="password_confirmation" 
                        required 
                        autocomplete="new-password">
                    </div>
                </div>

                <div class="">
                    <div class="">
                        <button type="submit" class="submit">
                            {{ __('Register') }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
