@extends('layouts.master')

@section('meta')
    <title>{{$organizer->name}}</title>
    <script> window.myToken =  <?php echo json_encode(['csrfToken' => csrf_token()]); ?></script>
    <link href="{{ mix('/assets/app.css') }}" rel="stylesheet">
    <link href="{{ mix('/assets/app-lite.css') }}" rel="stylesheet">
@endsection

@section('nav')
    @auth
        <vue-nav onclass="org" :user= "{{auth()->user()}}"></vue-nav>
    @endauth
    @guest
        <vue-nav onclass="org"></vue-nav>
    @endguest
@endsection

@section('content')
    <div id="bodyArea" class="org">
        @auth
            <organizer-show :user="{{auth()->user()}}" :loadorganizer="{{ $organizer }}"></organizer-show> 
        @endauth
        @guest
            <organizer-show :loadorganizer="{{ $organizer }}"></organizer-show> 
        @endguest
    </div>
@endsection

@section('footer')
    <vue-footer></vue-footer>
@endsection 
