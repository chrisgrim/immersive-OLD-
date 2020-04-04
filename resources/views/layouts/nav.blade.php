<header id="header">
	@auth
		<vue-nav :user= "{{auth()->user()}}"></vue-nav>
	@endauth
	@guest
		<vue-nav></vue-nav>
	@endguest
</header>