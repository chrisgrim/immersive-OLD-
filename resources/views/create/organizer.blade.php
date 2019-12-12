@extends('create.index')

@section('created')

<create-organizer :user="{{auth()->user()}}" />

@endsection
