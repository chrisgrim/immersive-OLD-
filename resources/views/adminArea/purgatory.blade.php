@extends('adminArea.index')

@section('adminarea')
    <vue-admin-purgatory :loadedevents="{{$events}}"></vue-admin-purgatory>
@endsection