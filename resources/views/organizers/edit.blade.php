@extends('layouts.create.master')

@section('content')
    <div id="create">  
        <div class="content">
            <edit-organizer :loadorganizer="{{$organizer}}" :user="{{auth()->user()}}" />
        </div>
    </div>  
@endsection
