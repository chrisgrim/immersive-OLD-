@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
    <link href="/css/app-lite.css" rel="stylesheet">
@endsection 

@section('nav')
    @auth
        <vue-nav onclass="homepage" :user= "{{auth()->user()}}"></vue-nav>
    @endauth
    @guest
        <vue-nav onclass="homepage"></vue-nav>
    @endguest
@endsection

@section('content')
    <div id="bodyArea">
        @if ( session()->exists( 'verifiy' )) 
           <vue-email-verify 
            :user="{{auth()->user()}}" 
            message="verify">
            </vue-email-verify>
        @endif
        <event-index 
        :staffpicks="{{$staffpicks}}"
        :events="{{$events}}" 
        :remote="{{$remote}}" 
        :categories="{{$categories}}"/>	
    </div>
@endsection

@section('footer')
    <vue-footer></vue-footer>
@endsection 