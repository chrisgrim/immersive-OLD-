@extends('layouts.master')

@section('content')

<div>
	<div id="bodyArea">
		<event-show :loadevent="{{$event}}">	
	</div>
</div>

@endsection