@extends('layouts.create.master')

@section('content')
	<div id="create" class="start">
		<div class="content">
			<div>
	            <h2>Hi, {{auth()->user()->name}}! Let's get your event listed on Everything Immersive.</h2>
                <h4>Step 1</h4>
	            <p>We are excited you are listing your event on our site! The first step is to let us know about your organization.</p>
	        </div>
            <a href="/organizer/create" class="button">Create Organizer</a>
		</div>
		
	</div>

@endsection
