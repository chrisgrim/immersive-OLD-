@extends('create.index')

@section('created')

<create-expect :event="{{$event}}" :contact="{{$contactLevels}}" :content="{{$contentAdvisories}}" :pivots="{{$pivots}}" :contentpivots="{{$contentpivots}}">	

@endsection