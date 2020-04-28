@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
    <link href="/css/app-lite.css" rel="stylesheet">
@endsection 

@section('nav')
    @auth
        <vue-nav :user= "{{auth()->user()}}"></vue-nav>
    @endauth
    @guest
        <vue-nav></vue-nav>
    @endguest
@endsection

@section('content')
    <div id="bodyArea">
        <event-index 
        :staffpicks="{{$staffpicks}}"
        :events="{{$events}}" 
        :remote="{{$remote}}" 
        :categories="{{$categories}}"/>	
    </div>
@endsection