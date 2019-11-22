@extends('adminArea.index')

@section('adminarea')

<div class="container">
    <div class="create-title">
        <h2>Genres</h2>
        <p>This is the default preloaded list</p>
    </div>
    <div>
        <form method="POST" action="/genres" class="floating-form">
        @csrf
        <div class="floating-form">
            <div class="create-field">
                <input class="create-input category" type="text" name="genre" placeholder="Genre Name">
            </div>
            <button type="submit" class="create">
                Create
            </button>
        </div>
        </form>
    </div>
    <div>
        @foreach($genres as $genre)
        <form method="POST" action="/genres/{{$genre->id}}" class="floating-form">
        @method('PATCH')
        @csrf
        <div class="floating-form">
            <div class="create-field">
                <div class="category-edit">
                    <input class="create-input" value="{{$genre->genre}}" type="text" name="genre" placeholder="Genre Name">
                </div>
                <button type="submit" class="create">
                    Update
                </button>
            </div>
        </div>
        </form>
        <form method="POST" action="/genres/{{$genre->id}}" class="floating-form">
        @method('delete')
        @csrf
            <div>
                <button type="submit" class="create">
                        Delete
                </button>
            </div>
        </form>
        
        @endforeach
    </div>
</div>

@endsection