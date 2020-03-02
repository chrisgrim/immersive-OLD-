@extends('create.index')

@section('created')     
    <create-review :event="{{$event}}" /></create-review> 
@endsection
@section('review')
    <event-show :loadevent="{{$event}}"></event-show>
@endsection