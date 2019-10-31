@extends('layouts.master')

@section('content')


			<form method="POST" action="/events" class="floating-form">
	        @csrf
	            <button type="submit" class="create">
	                Create
	            </button>
	    	</form>


   

@endsection
