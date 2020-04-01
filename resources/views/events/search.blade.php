@extends('layouts.master')

@section('meta')
    <title>Search Events</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection 

@section('content')

<div id="bodyArea">
    <search-listing user="{{ auth()->id() }}" :categories="{{ $categories }}" :searchedevents="{{ $searchedevents }}">
</div>

@endsection