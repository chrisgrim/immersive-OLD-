@extends('layouts.master')

@section('content')

<div>
	<div id="bodyArea">
		<event-index :events="{{$events}}" :categories="{{$categories}}"/>	
	</div>
</div>

@endsection