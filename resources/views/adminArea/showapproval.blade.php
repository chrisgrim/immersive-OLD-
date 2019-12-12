@extends('layouts.create.master')

@section('content')

<div id="bodyArea" class="approve">
    <div class="approve">
        <event-show :loadevent="{{$event}}">
    </div>
    <div>
        <approval-bar :loadevent="{{$event}}">
    </div>
</div>


{{-- <div class="container">
    <div>
        
        <form method="POST" action="/unapprove/{{$event->slug}}" class="floating-form">
            @csrf
            <button type="submit" class="create">
                Deny
            </button>
        </form>
    </div>
</div> --}}

@endsection