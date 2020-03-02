@extends('layouts.create.master')

@section('content')
    <div id="create">
    	<event-create-checklist :event="{{$event}}"></event-create-checklist>	
    	<div class="content">
    		@yield('created')
    	</div>
    </div>	
@endsection
@section('content2')
    <div id="bodyArea">
        @yield('review')
    </div>
@endsection

