@extends('layouts.master')

@section('meta')
    <title>{{$category->name}}</title>
    <link href="/css/app-lite.css" rel="stylesheet">
@endsection 

@section('content')
<div class="inner-container">
    <div id="bodyArea">
        <category-show :category="{{$category}}"> 
    </div>
</div>

@endsection