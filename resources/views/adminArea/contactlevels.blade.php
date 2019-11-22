@extends('adminArea.index')

@section('adminarea')

<div class="container">
	<div class="create-title">
		<h2>Contact Levels</h2>
    	<p>Create Different Contact Levels</p>
    </div>
    <div>
    	<form method="POST" action="/contactlevels" class="floating-form">
        @csrf
        <div class="floating-form">
	        <div class="create-field">
	        	<input class="create-input category" type="text" name="level" placeholder="Level Name">
			</div>
            <button type="submit" class="create">
                Create
            </button>
        </div>
    	</form>
    </div>
    <div>
    	@foreach($contactlevels as $contactlevel)
		<form method="POST" action="/contactlevels/{{$contactlevel->id}}" class="floating-form">
		@method('PATCH')
        @csrf
        <div class="floating-form">
	        <div class="create-field">
	        	<div class="category-edit">
		        	<input class="create-input" value="{{$contactlevel->level}}" type="text" name="level" placeholder="Level Name">
	        	</div>
				<button type="submit" class="create">
	                Update
	            </button>
			</div>
        </div>
    	</form>
    	@endforeach
    </div>
</div>

@endsection