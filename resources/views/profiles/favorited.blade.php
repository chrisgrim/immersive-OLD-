@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
    <link href="{{ mix('/assets/app.css') }}" rel="stylesheet">
    <link href="{{ mix('/assets/app-lite.css') }}" rel="stylesheet">
@endsection 

@section('nav')
    @auth
        <vue-nav 
            navtype="favorited" 
            :user= "{{auth()->user()}}" />
    @endauth
    @guest
        <vue-nav></vue-nav>
    @endguest
@endsection

@section('content')
    <div id="bodyArea">
        <vue-user-favorited 
            :loadevents="{{ $events->toJson() }}" 
            :loaduser="{{ auth()->user() }}" /> 
    </div>
@endsection