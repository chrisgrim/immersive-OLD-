@extends('layouts.master')

@section('meta')
    <script type="application/ld+json">
        {
        "@context":"http://schema.org",
        "@type":"Organization",
        "address":{ 
            "@type":"PostalAddress",
            "addressLocality":"Petaluma",
            "addressRegion":"SF",
            "postalCode":"94952",
            "streetAddress":"600 East D St"
            },
        "logo":"https://everythingimmersive.com/website-files/ei-logo.png",
        "name":"Everything Immersive",
        "sameAs":[
            "https://www.facebook.com/EverythingImmersive/",
            "https://www.linkedin.com/company/everythingimmersive",
            "https://www.instagram.com/everythingimmersive/",
            "https://twitter.com/everythingimmersive",
            "https://plus.google.com/+everythingimmersive",
            "https://en.wikipedia.org/wiki/everythingimmersive"
        ],
        "url":"https://everythingimmersive.com"}
    </script>
    <title>{{config('app.name')}}</title>
    <link href="{{ mix('/assets/app-lite.css') }}" rel="stylesheet">
@endsection 

@section('nav')
    @auth
        <vue-nav onclass="homepage" :user= "{{auth()->user()}}"></vue-nav>
    @endauth
    @guest
        <vue-nav onclass="homepage"></vue-nav>
    @endguest
@endsection

@section('content')
    <div id="bodyArea">
        @if ( session()->exists( 'verifiy' )) 
           <vue-email-verify 
            :user="{{auth()->user()}}" 
            message="verify">
            </vue-email-verify>
        @endif
        <event-index 
        :staffpicks="{{$staffpicks}}"
        :events="{{$events}}" 
        :remote="{{$remote}}" 
        :categories="{{$categories}}"/>	
    </div>
@endsection

@section('footer')
    <vue-footer></vue-footer>
@endsection 