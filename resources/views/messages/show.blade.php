@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection

@section('nav')
        <vue-nav onclass="messageshow" :user= "{{auth()->user()}}"></vue-nav>
@endsection

@section('content')
    <div id="bodyArea">
        <message-show :loadmessages="{{ $conversation }}" :loaduser="{{ auth()->user() }}"></message-show> 
    </div>
@endsection

@section('footer')
    <vue-footer></vue-footer>
@endsection 