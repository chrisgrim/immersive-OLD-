@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}} - Verify</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection

@section('nav')
    <vue-nav :user= "{{auth()->user()}}"></vue-nav>
@endsection

@section('content')
    <div id="bodyArea">
        <vue-email-verify 
        :user="{{auth()->user()}}" 
        message="verify">
        </vue-email-verify>
        <event-index 
        :staffpicks="{{$staffpicks}}"
        :events="{{$events}}" 
        :remote="{{$remote}}" 
        :categories="{{$categories}}"/>
    </div>
@endsection
