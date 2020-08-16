@extends('layouts.master')

@section('meta')
    <title>Search Events</title>
    <link href="{{ mix('/assets/app-lite.css') }}" rel="stylesheet">
    <link href="{{ mix('/assets/app.css') }}" rel="stylesheet">
@endsection 

@section('nav')
    @auth
        <vue-nav onclass="searchpage" :user= "{{auth()->user()}}"></vue-nav>
    @endauth
    @guest
        <vue-nav onclass="searchpage"></vue-nav>
    @endguest
@endsection

@section('content')
    <div id="bodyArea">
        <search-listing user="{{ auth()->id() }}" :tags="{{ $tags }}" :searchedevents="{{ $searchedevents }}" :categories="{{ $categories }}" :searchedevents="{{ $searchedevents }}">
    </div>
@endsection

@section('footer')
    <vue-footer></vue-footer>
@endsection 