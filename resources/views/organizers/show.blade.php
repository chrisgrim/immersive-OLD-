@extends('layouts.master')

@section('meta')
    <title>{{$organizer->name}}</title>
    <script> window.myToken =  <?php echo json_encode(['csrfToken' => csrf_token()]); ?></script>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection 

@section('content')
<div id="bodyArea">
    @auth
        <organizer-show :user="{{auth()->user()}}" :loadorganizer="{{ $organizer }}"></organizer-show> 
    @endauth
    @guest
        <organizer-show :loadorganizer="{{ $organizer }}"></organizer-show> 
    @endguest
</div>
@endsection
