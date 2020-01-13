@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
@endsection 

@section('content')

<div>
	<div id="bodyArea">
		<event-index :events="{{$events}}" :categories="{{$categories}}"/>	
	</div>
</div>

@endsection