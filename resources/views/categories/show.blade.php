@extends('layouts.master')

@section('content')

<div class="inner-container">
    <div id="bodyArea">
        <category-show :events="{{$events}}" :category="{{$category}}" :categories="{{$categories}}"> 
    </div>
</div>

@endsection