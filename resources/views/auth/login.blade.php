@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}} - Login</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection 

@section('content')
<div id="bodyArea">
    <vue-register></vue-register>
</div>
@endsection