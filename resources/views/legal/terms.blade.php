@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection 

@section('nav')
    @auth
        <vue-nav onclass="profile" :user= "{{auth()->user()}}"></vue-nav>
    @endauth
    @guest
        <vue-nav></vue-nav>
    @endguest
@endsection

@section('content')
    <div class="account-index">
        <div class="account-notifications_header">
            <h2>Terms</h2>
        </div>
        <section class="account-index-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptatibus illum voluptatem voluptas itaque, sequi necessitatibus illo pariatur delectus vero ipsam ad, eaque, blanditiis adipisci doloremque reprehenderit ipsa eius ab?
        </section>
    </div>
@endsection

@section('footer')
    <vue-footer></vue-footer>
@endsection 