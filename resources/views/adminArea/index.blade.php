@extends('layouts.master')

@section('content')

<div id="admin">
	<div class="container-checklist">	
		@include('adminArea.nav')
	</div>		

	<div class="container-admin">
		@yield('adminarea')
	</div>
</div>	

@endsection
