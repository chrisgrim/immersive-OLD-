<header id="header">
	@auth
		<vue-nav :loaduser="{{auth()->user()}}"></vue-nav>
	@endauth
	@guest
		<vue-nav></vue-nav>
	@endguest

</header>