@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
    <link href="/css/app-lite.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
@endsection 

@section('content')

<div>
	<div id="bodyArea">
		<edit-events user="{{auth()->id()}}"/>	
	</div>
</div>

@endsection