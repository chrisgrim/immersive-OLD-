@extends('layouts.master')

@section('content')

<div id="bodyArea">
    <search-listing :searchedevents="{{json_encode($searchedevents)}}">
</div>

@endsection