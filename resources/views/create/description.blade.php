@extends('create.index')

@section('created')			

<create-description :event="{{$event}}" :genres="{{$genres}}" :pivots="{{$pivots}}">	
 
@endsection
