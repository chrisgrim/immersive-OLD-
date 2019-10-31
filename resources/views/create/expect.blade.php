@extends('create.index')

@section('created')

<create-expect :event="{{$event}}" :contact="{{$contactLevels}}" :pivots="{{$pivots}}">	

@endsection