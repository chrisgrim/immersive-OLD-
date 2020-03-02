@extends('layouts.master')

@section('meta')
    <title>{{$category->name}}</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection 

@section('content')
    <div id="bodyArea"> 
        <category-show :category="{{$category}}"> 
    </div>
@endsection