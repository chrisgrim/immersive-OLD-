@extends('layouts.master')

@section('content')

<div class="inner-container">
	<div id="bodyArea">
		{{$event->id}}

		<event-show :loadevent="{{$event}}">	
	</div>
</div>

@endsection