@extends('create.index')

@section('meta')
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxpUKfSJMC4_3xwLU73AmH-jszjexoriw&libraries=places"></script>
@endsection

@section('created')			

<create-location-google :event="{{$event}}"/>

@endsection
