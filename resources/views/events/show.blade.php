@extends('layouts.master')

@section('meta')
    <script type="application/ld+json">{"@context":"http://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressLocality":"Petaluma","addressRegion":"SF","postalCode":"94952","streetAddress":"600 East D St"},"logo":"https://www.todaytix.com/img/TodayTix_logo.png","name":"Everything Immersive","sameAs":["https://www.facebook.com/EverythingImmersive/","https://www.linkedin.com/company/everythingimmersive","https://www.instagram.com/everythingimmersive/","https://twitter.com/everythingimmersive","https://plus.google.com/+everythingimmersive","https://en.wikipedia.org/wiki/everythingimmersive"],"url":"https://www.everythingimmersive.com"}</script>
    <script type="application/ld+json">{
        "@context":"http://schema.org",
        "@type":"Event",
        @if($event->hasLocation)
        "location":{"@type":"Place",
        "address":{"@type":"PostalAddress","addressLocality":"{{$event->location->city}}","addressRegion":"{{$event->location->region}}",
        "postalCode":"{{$event->location->postal_code}}",
        "streetAddress":"{{$event->location->street}}"},
        @endif
        "name":"{{$event->name}}"},
        "image":"/storage/{{$event->largeImagePath}}",
        "description":"{{$event->description}}",
        "name":"{{$event->name}}",
        @if($event->shows->isEmpty())
        "startDate":{{$event->created_at}},
        @else
        "startDate":"{{$event->shows[0]->date}}",
        @endif
        "endDate":"{{$event->closingDate}}"}
    </script>
    
    <title>{{$event->name}}</title>
    <meta name="description" content="{{$event->tag_line}}"/>
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="event" />
    <meta property="og:title" content="{{$event->title}}" />
    <meta property="og:description" content="{{$event->description}}" />
    <meta property="og:url" content="{{url()->current()}}" />
    <meta property="og:site_name" content="{{config('app.name')}}" />
    <meta property="article:publisher" content="https://www.facebook.com/webfxinc" />
    <meta property="article:section" content="Events" />
    <meta property="article:published_time" content="{{$event->created_at}}" />
    <meta property="article:modified_time" content="{{$event->updated_at}}" />
    <meta property="og:updated_time" content="{{$event->updated_at}}" />
    <meta property="og:image" content="{{ url('/') }}/storage/{{$event->largeImagePath}}" />
    <meta property="og:image:secure_url" content="{{ url('/') }}/storage/{{$event->largeImagePath}}" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="720" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content="{{$event->description}}" />
    <meta name="twitter:title" content="{{$event->name}}" />
    <meta name="twitter:site" content="@everythingimmersive" />
    <meta name="twitter:image" content="{{ url('/') }}/storage/{{$event->largeImagePath}}" />
    <meta name="twitter:creator" content="@everythingimmersive" />
    <link href="/css/app-lite.css" rel="stylesheet">
@endsection

@section('content')

<div id="bodyArea">
	<event-show :loadevent="{{$event}}" user="{{auth()->id()}}">	
</div>

@endsection