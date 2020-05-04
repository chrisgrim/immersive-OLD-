@extends('layouts.master')

@section('meta')
        <link href="/css/app-create.css" rel="stylesheet">
        <link href="/css/app-lite.css" rel="stylesheet">
        <link href="/css/app.css" rel="stylesheet">
@endsection

@section('nav')
    @auth
        <vue-nav onclass="create" :user= "{{auth()->user()}}"></vue-nav>
    @endauth
@endsection

@section('content')

<div id="bodyArea" class="show">
    <vue-create-first-event :user="{{auth()->user()}}"></vue-create-first-event> 
</div>

@endsection
