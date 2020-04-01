@extends('layouts.create.master')

@section('content')
    <div id="create">  
        <div class="content">
            <create-organizer :loadorganizer="{{$organizer}}" :user="{{auth()->user()}}" />
        </div>
    </div>  
@endsection
