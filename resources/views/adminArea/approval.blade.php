@extends('adminArea.index')

@section('adminarea')

<div class="container">
    <div class="create-title">
        <h2>Event Approval</h2>
        <p>These are the events that need approval</p>
    </div>
    <div>
        @foreach($events as $event)
            <div>
                <a href="/approve/events/{{$event->slug}}">
                    {{$event->name}}
                </a>
            </div>
        @endforeach
    </div>
</div>

@endsection