@extends('layouts.master')

@section('meta')
    <title>{{config('app.name')}}</title>
@endsection 

@section('content')

<div>
	<div id="bodyArea">
		<edit-events/>	
	</div>
</div>

@endsection