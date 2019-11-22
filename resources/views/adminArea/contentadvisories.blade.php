@extends('adminArea.index')

@section('adminarea')

<div class="container">
	<div class="create-title">
		<h2>Content Advisories</h2>
    	<p>This is the default preloaded list</p>
    </div>
    <div>
    	<form method="POST" action="/contentadvisories" class="floating-form">
        @csrf
        <div class="floating-form">
	        <div class="create-field">
	        	<input class="create-input category" type="text" name="advisories" placeholder="Advisory Name">
			</div>
            <button type="submit" class="create">
                Create
            </button>
        </div>
    	</form>
    </div>
    <div>
    	@foreach($contentadvisories as $contentadvisory)
		<form method="POST" action="/contentadvisories/{{$contentadvisory->id}}" class="floating-form">
		@method('PATCH')
        @csrf
        <div class="floating-form">
	        <div class="create-field">
	        	<div class="category-edit">
		        	<input class="create-input" value="{{$contentadvisory->advisories}}" type="text" name="advisories" placeholder="Advisory Name">
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