@extends('create.index')

@section('created')
    <create-advisories :event="{{$event}}" :loadcontact="{{$contactAdvisories}}" :loadcontent="{{$contentAdvisories}}" :loadmobility="{{$mobilityAdvisories}}">	
@endsection