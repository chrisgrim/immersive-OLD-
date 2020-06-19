@extends('adminArea.index')

@section('adminarea')
    <vue-admin-boneyard :loadedevents="{{$events}}"></vue-admin-boneyard>
@endsection