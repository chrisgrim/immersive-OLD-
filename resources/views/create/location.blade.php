@extends('create.index')

@section('created')			

<create-location-google :regions="{{$regions}}" :event="{{$event}}" :pivots="{{$pivots}}" />

@endsection
