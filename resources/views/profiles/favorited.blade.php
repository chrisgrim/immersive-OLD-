@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection 

@section('nav')
    @auth
        <vue-nav onclass="favorited" :user= "{{auth()->user()}}"></vue-nav>
    @endauth
    @guest
        <vue-nav></vue-nav>
    @endguest
@endsection

@section('content')
    <div id="bodyArea">
        <vue-user-favorited :events="{{ $events }}" :loaduser="{{ auth()->user() }}" v-cloak></vue-user-favorited> 
    </div>
@endsection