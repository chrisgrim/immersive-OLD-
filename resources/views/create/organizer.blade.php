@extends('create.index')

@section('created')

<create-organizer :event="{{$event}}" :organizers="{{$organizers}}" :user="{{auth()->user()}}" />

   
@endsection
