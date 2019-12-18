<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('layouts.meta')
        <link href="/css/app-admin.css" rel="stylesheet">
    </head>
    <body>
        @include('layouts.admin.nav')
        <main>
            @yield('content')
        </main>
        @include('layouts.create.footer')
    </body>
</html>