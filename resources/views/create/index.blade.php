@extends('layouts.master')

@section('meta')
        <link href="/css/app-create.css" rel="stylesheet">
        <link href="/css/app-lite.css" rel="stylesheet">
        <link href="/css/app.css" rel="stylesheet">
        @yield('location')
@endsection

@section('content')
    <div id="create">
    	@yield('created')
    </div>	
@endsection

