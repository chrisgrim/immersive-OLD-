@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection

@section('nav')
    <vue-nav onclass="message" :user= "{{auth()->user()}}"></vue-nav>
@endsection

@section('content')
    <div id="bodyArea">
        <message-index :conversations="{{$conversations}}" :loaduser="{{ auth()->user() }}"></message-index> 
    </div>
@endsection