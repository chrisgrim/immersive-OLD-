@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection

@section('nav')
    @auth
        <vue-nav :user= "{{auth()->user()}}"></vue-nav>
    @endauth
    @guest
        <vue-nav></vue-nav>
    @endguest
@endsection

@section('content')
    <div id="bodyArea">
        <div class="four-container">
            <div class="four-image">
                <img style="width:100%;height: 100%;" src="/storage/website-files/404.svg" />
            </div>
            <div class="content">
                <div class="four-title">
                    <h2>Whoops! There doesn't seem to be anything here</h2>
                </div>
                <div class="body">
                    <p>Sorry about that! Use the link below to head back to the home page.</p>
                    <a href="/"><button class="four">Home</button></a>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer')
    <vue-footer></vue-footer>
@endsection 