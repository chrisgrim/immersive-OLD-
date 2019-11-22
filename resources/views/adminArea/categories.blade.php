@extends('adminArea.index')

@section('adminarea')

<div class="container">
	<div class="create-title">
		<h2>Categories</h2>
    	<p>Create Different Categories</p>
    </div>
    <div>
    	<form method="POST" action="/categories" class="floating-form" enctype="multipart/form-data">
        @csrf
        <div class="floating-form">
	        <div class="create-field">
	        	<input class="create-input category" type="text" name="name" placeholder="Category Name">
	        	<input class="create-input category" type="text" name="description" placeholder="Category Description">
				<input data-preview="#preview" name="imagePath" type="file">
			</div>
            <button type="submit" class="create">
                Create
            </button>
        </div>
    	</form>
    </div>
    <div>
    	@foreach($categories as $category)
		<form method="POST" action="/categories/{{$category->slug}}" class="floating-form" enctype="multipart/form-data">
		@method('PATCH')
        @csrf
        <div class="floating-form">
	        <div class="create-field">
	        	<div class="category-edit">
		        	<input class="create-input" value="{{$category->name}}" type="text" name="name" placeholder="Category Name">
		        	<input class="create-input" value="{{$category->description}}" type="text" name="description" placeholder="Category Description">
	        	</div>
	        	<div class="cat-image-upload-wrapper" style="background:url(/storage/{{$category->imagePath}}) center center no-repeat;background-size: cover;">
		        	<label for="imagePath"></label>
					<input data-preview="#preview" name="imagePath" type="file" id="imagePath">
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