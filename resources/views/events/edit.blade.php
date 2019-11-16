@extends('layouts.master')

@section('content')

<div class="inner-container">
	<div id="bodyArea">
		<edit-events :loadevents="{{$events}}">	
	</div>
</div>

@endsection