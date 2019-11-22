@extends('adminArea.index')

@section('adminarea')

<div class="container">
    <div>
        <div>
            {{$event->name}}
        </div>
        <div>
            {{$event->description}} 
        </div>
        <form method="POST" action="/approve/{{$event->slug}}" class="floating-form">
            @csrf
            <button type="submit" class="create">
                Approve
            </button>
        </form>
        <form method="POST" action="/unapprove/{{$event->slug}}" class="floating-form">
            @csrf
            <button type="submit" class="create">
                Deny
            </button>
        </form>
    </div>
</div>

@endsection