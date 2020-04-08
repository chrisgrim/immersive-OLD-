@extends('create.index')

@section('created')     
    <create-review :event="{{$event}}" /></create-review> 
@endsection
@section('review')
    <vue-create-review-event :loadevent="{{$event}}"></vue-create-review-event>
@endsection