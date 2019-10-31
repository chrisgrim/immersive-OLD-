@extends('layouts.master')

@section('content')

<div id="create">
	<div class="container-checklist">	
		@include('create.checklist')
	</div>		

	<div class="container-create">
		@yield('created')
	</div>
</div>	

@endsection
