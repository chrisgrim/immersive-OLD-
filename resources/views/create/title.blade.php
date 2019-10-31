@extends('create.index')

@section('created')		

<create-title :event="{{$event}}" /></create-title>	

{{-- 			<form method="POST" action="/create-event/{{$event->slug}}/title" class="floating-form">
	        @csrf
	        	<input type="text" name="title" placeholder="title">

	            <button type="submit" class="create">
	                Create
	            </button>
	    	</form> --}}

@endsection
