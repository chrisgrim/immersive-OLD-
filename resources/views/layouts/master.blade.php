<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		@include('layouts.meta')
        @yield('meta')
	</head>
	<body>
		@include('layouts.nav')
		<main>
            @include('layouts.flashes')
			@yield('content')
		</main>
		@include('layouts.footer')
	</body>
</html>