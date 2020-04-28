@extends('create.index')

@section('created')
    <create-category :event="{{$event}}" :categories="{{$categories}}" />
@endsection
