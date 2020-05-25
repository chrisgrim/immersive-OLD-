@extends('create.index')

@section('created')
    <div class="create-body">
        @include('create.nav')
        <create-title :event="{{$event}}" /></create-title>	
    </div>
@endsection
