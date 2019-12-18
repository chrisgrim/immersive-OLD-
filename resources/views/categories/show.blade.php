@extends('layouts.master')

@section('content')

<div class="inner-container">
    <div id="bodyArea">
        <category-show :category="{{$category}}"> 
    </div>
</div>

@endsection