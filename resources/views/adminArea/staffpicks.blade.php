@extends('adminArea.index')

@section('adminarea')
    <admin-staff-picks :loadusers="{{$users}}"></admin-staff-picks>
@endsection