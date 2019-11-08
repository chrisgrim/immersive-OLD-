@extends('create.index')

@section('created')

<create-organizer :event="{{$event}}" :user="{{auth()->user()}}" />

   
@endsection
