@extends('layouts.master')

@section('content')
	<div class="initial_create">
		<div class="initial_create-text">
			<div>
	            <h2>Add an event</h2>
	            <p>Let our users know about your upcoming event!</p>
	        </div>
			<form method="POST" action="/events" class="floating-form">
			@csrf
			<button type="submit" class="create">
			Create
			</button>
			</form>
		</div>
		
	</div>

@endsection
