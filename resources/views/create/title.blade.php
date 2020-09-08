@extends('create.index')

@section('created')
    <div class="create-body">
        @include('create.nav')
        @if (auth()->user()->events()->count() == 1 && auth()->user()->events()->first()->status == 0 )
            <create-title :new="true" :event="{{$event}}" /></create-title>	
        @else
            <create-title :new="false" :event="{{$event}}" /></create-title>
        @endif
    </div>
@endsection
