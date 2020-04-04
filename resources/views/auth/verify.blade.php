@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}} - Verify</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection 

@section('content')
<div id="bodyArea">
    <vue-email-verify :user="{{auth()->user()}}" message="verify"></vue-email-verify>
    <event-index :staffpicks="{{$staffpicks}}" user="{{auth()->id()}}" :events="{{$events}}" :categories="{{$categories}}"/>
</div>
@endsection
