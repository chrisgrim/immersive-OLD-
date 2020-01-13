@extends('layouts.master')

@section('meta')
    <title>Search Events</title>
@endsection 

@section('content')

<div id="bodyArea">
    <search-listing :categories="{{$categories}}" :searchedevents="{{json_encode($searchedevents)}}">
</div>

@endsection