@extends('layouts.master')

@section('content')
	<div id="create" class="initial_create">
		<div class="initial_create-text">
			<div>
	            <h2>Hi, {{auth()->user()->name}}! Let's get your event listed Everything Immersive.</h2>
                <h4>Step 1</h4>
	            <h3>The first step is to let us know about your organization putting on the event.</h3>
                <create-organizer :user="{{auth()->user()}}" />
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
