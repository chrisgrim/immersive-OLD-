@extends('layouts.master')

@section('meta')
    <link href="/css/app-admin.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
    <link href="/css/app-lite.css" rel="stylesheet">
    <script src="/js/app.js" defer=""></script>
@endsection

@section('nav')
    <admin-nav onclass="a" :loaduser="{{auth()->user()}}"></admin-nav>
@endsection

@section('content')
    <div id="admin">
    	@yield('adminarea')
    </div>	
@endsection
