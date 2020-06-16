@extends('layouts.master')

@section('meta')
    <title>Search Online Events</title>
    <link href="{{ mix('/assets/app-lite.css') }}" rel="stylesheet">
    <link href="{{ mix('/assets/app.css') }}" rel="stylesheet">
@endsection 

@section('nav')
    @auth
        <vue-nav onclass="onlinesearch" :user= "{{auth()->user()}}"></vue-nav>
    @endauth
    @guest
        <vue-nav onclass="onlinesearch"></vue-nav>
    @endguest
@endsection

@section('content')
    <div id="bodyArea">
        <vue-event-online-search user="{{ auth()->id() }}" :categories="{{ $categories }}" :searchedevents="{{ $searchedevents }}"></vue-event-online-search>
    </div>
@endsection

@section('footer')
    <vue-footer></vue-footer>
@endsection 