@extends('layouts.master')

@section('content')

<div class="inner-container">
	<div id="bodyArea">
		<event-listing :events="{{$events}}">	
	</div>
</div>

@endsection