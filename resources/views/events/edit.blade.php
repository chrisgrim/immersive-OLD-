@extends('layouts.master')

@section('content')

<div class="inner-container">
	<div id="bodyArea">
		<edit-events :eventsbyorganizer="{{json_encode($eventsbyorganizer)}}">	
	</div>
</div>

@endsection