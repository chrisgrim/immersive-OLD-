@extends('layouts.master')

@section('meta')
        <link href="/css/app-create.css" rel="stylesheet">
        <link href="/css/app-lite.css" rel="stylesheet">
        <link href="/css/app.css" rel="stylesheet">
        @yield('location')
@endsection

@section('nav')
    @isset($event)
        <vue-create-nav :user="{{auth()->user()}}" :event="{{$event}}"></vue-create-nav>
    @else
        <vue-create-nav :user="{{auth()->user()}}"  event="null"></vue-create-nav>
    @endisset
@endsection

@section('content')
    <div id="create">
    	<div class="create-body">
    		@yield('created')
    	</div>
    </div>	
@endsection

@section('content2')
    <div id="bodyArea">
        @yield('review')
    </div>
@endsection

