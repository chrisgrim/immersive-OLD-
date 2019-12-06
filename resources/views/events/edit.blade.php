@extends('layouts.master')

@section('content')

<div>
	<div id="bodyArea">
		<edit-events :eventsbyorganizer="{{json_encode($eventsbyorganizer)}}">	
	</div>
</div>

@endsection