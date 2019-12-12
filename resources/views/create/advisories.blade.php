@extends('create.index')

@section('created')

<create-advisories :event="{{$event}}" :contact="{{$contactLevels}}" :content="{{$contentAdvisories}}" :pivots="{{$pivots}}" :contentpivots="{{$contentpivots}}">	

@endsection