@extends('layouts.master')

@section('content')

<div>
    <div id="bodyArea">
        <organizer-show :loadorganizer="{{ $organizer }}"></organizer-show>  
    </div>
</div>

@endsection