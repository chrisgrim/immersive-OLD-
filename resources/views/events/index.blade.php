@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <script src="/js/applite.js" defer=""></script>
@endsection 

@section('content')

@if (session('verify'))
    <div class="verify_bar">
        <div class="text">
            <p>Please take a minute to verify your account</p>
        </div>
        <div class="submit">
            <p>If you did not recieve an email </p>
            <form class="" method="POST" action="{{ route('verification.resend') }}">
                @csrf
                <button type="submit" class="another">{{ __('click here to request another') }}</button>.
            </form>
        </div>
    </div>
@endif

<div>
	<div id="bodyArea">
		<event-index :events="{{$events}}" :categories="{{$categories}}"/>	
	</div>
</div>

@endsection