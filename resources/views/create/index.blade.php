@extends('layouts.create.master')

@section('content')

<div id="create">
	<div class="steps">	
		<event-create-checklist :event="{{$event}}">
	</div>		

	<div class="content">
		@yield('created')
	</div>
</div>	

@endsection
