@extends('adminArea.index')

@section('adminarea')

<div class="container">
	<div class="create-title">
		<h2>Regions</h2>
    	<p>Create Different Regions</p>
    </div>
    <div>
    	<form method="POST" action="/regions" class="floating-form">
        @csrf
        <div class="floating-form">
	        <div class="create-field">
	        	<input class="create-input category" type="text" name="region" placeholder="Region Name">
			</div>
            <button type="submit" class="create">
                Create
            </button>
        </div>
    	</form>
    </div>
    <div>
    	@foreach($regions as $region)
		<form method="POST" action="/regions/{{$region->id}}" class="floating-form">
		@method('PATCH')
        @csrf
        <div class="floating-form">
	        <div class="create-field">
	        	<div class="category-edit">
		        	<input class="create-input" value="{{$region->region}}" type="text" name="region" placeholder="Category Name">
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