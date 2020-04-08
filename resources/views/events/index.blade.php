@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
    <link href="/css/app-lite.css" rel="stylesheet">
@endsection 

@section('content')
    <div id="bodyArea">
        <event-index :staffpicks="{{$staffpicks}}" user="{{auth()->id()}}" :events="{{$events}}" :remote="{{$remote}}" :categories="{{$categories}}"/>	
    </div>
@endsection