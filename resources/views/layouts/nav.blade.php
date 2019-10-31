<header id="header">
	<nav class="grid nav">

		<a href="/">
			<div class="logo">
				<img src="/storage/website-files/ei-logo.png" alt="">
			</div>
		</a>

		<nav-search></nav-search>

		<div class="navmenu">
			<a href="/events/create">
				<div>Create Event</div>
			</a>

			<a href="/categories/create">
				<div>Create Category</div>
			</a>

			@auth
			<profile-button :user="{{ auth()->user() }}" v-cloak></profile-button>
			@else

			<a href="{{ route('login') }}">
				<div>Login</div>
			</a>

			@if (Route::has('register'))
			<a href="{{ route('register') }}">
				<div>Register</div>
			</a>
			@endif
			@endauth

		</div>
	</nav>
</header>