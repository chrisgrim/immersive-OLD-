@extends('create.index')

@section('created')			

<create-image :event="{{$event}}" />

{{-- <form method="POST" action="/create-event/{{$event->slug}}/images" enctype="multipart/form-data" >
	 @csrf
	        <input id="profile_image" type="file" class="form-control" name="image">
	            <button type="submit" class="create">
	                Create
	            </button>
</form> --}}

@endsection