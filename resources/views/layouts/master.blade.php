<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
        @yield('meta')
		@include('layouts.meta')
	</head>
	<body>
        <header id="header">
            @yield('nav')
        </header>
		<main>
            @include('layouts.flashes')
			@yield('content')
            @yield('content2')
		</main>
		@include('layouts.footer')
	</body>
</html>