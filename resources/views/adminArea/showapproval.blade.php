@extends('layouts.admin.secondary')

@section('content')

<div id="bodyArea">
    <div class="approve">
        <event-show :loadevent="{{$event}}">
    </div>
    <approval-bar :loadevent="{{$event}}">
</div>

@endsection