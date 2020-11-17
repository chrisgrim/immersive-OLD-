@extends('adminArea.index')

@section('adminarea')
    <approval-list user="{{auth()->id()}}" :events="{{$events}}"></approval-list>
@endsection