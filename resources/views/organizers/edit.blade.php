@extends('create.index')

@section('created')
    <create-organizer :loadorganizer="{{$organizer}}" :user="{{auth()->user()}}" />
@endsection
