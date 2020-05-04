@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxpUKfSJMC4_3xwLU73AmH-jszjexoriw&libraries=places"></script>
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
	<div id="bodyArea">
		<user-profile :events="{{ $events }}" :loc="{{ $loc }}" :loaduser="{{ $user }}" auth="{{auth()->id()}}" v-cloak></user-profile>	
	</div>
@endsection