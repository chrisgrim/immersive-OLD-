<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('layouts.meta')
        @yield('meta')
        <link href="/css/app-create.css" rel="stylesheet">
        <link href="/css/app-lite.css" rel="stylesheet">
        <link href="/css/app.css" rel="stylesheet">
        <script src="/js/app.js" defer=""></script>
    </head>
    <body>
        @include('layouts.create.nav')
        <main>
            @include('layouts.verifyMessage')
            @yield('content')
        </main>
        @include('layouts.create.footer')
    </body>
</html>