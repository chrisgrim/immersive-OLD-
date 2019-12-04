@extends('layouts.master')

@section('content')

<div class="inner-container">
	<div id="bodyArea">
		<search-listing :searchedevents="{{json_encode($searchedevents)}}">	
		}
	</div>
</div>

@endsection