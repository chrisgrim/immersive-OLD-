@extends('layouts.master')

@section('meta')
    <link href="/css/app-admin.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
    <link href="/css/app-lite.css" rel="stylesheet">
    <script src="/js/app.js" defer=""></script>
@endsection

@section('content')
    <div id="bodyArea">
        <div class="approve">
            <event-show :loadevent="{{$event}}">
        </div>
        <approval-bar :loadevent="{{$event}}">
    </div>
@endsection