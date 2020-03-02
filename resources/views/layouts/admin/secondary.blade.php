<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('layouts.meta')
        <link href="/css/app-admin.css" rel="stylesheet">
        <link href="/css/app.css" rel="stylesheet">
        <link href="/css/app-lite.css" rel="stylesheet">
        <script src="/js/app.js" defer=""></script>
    </head>
    <body>
        <main>
            @yield('content')
        </main>
        @include('layouts.footer')
    </body>
</html>