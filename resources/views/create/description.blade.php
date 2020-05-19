@extends('create.index')

@section('created')			
    <create-description :event="{{$event}}" :loadtags="{{$tags}}">	
@endsection
