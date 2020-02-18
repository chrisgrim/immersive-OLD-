<header id="header">
	@auth
		<vue-nav
        :loaduser= "{{auth()->user()}}"
        username="{{ (auth()->user()) ? auth()->user()->name : '' }}"
        userid="{{auth()->id()}}"
        avatar="{{ auth()->user()->avatar_path }}"
        :usertype="{{ auth()->user()->userType }}"
        createdevents="{{ auth()->user()->hasCreatedOrganizers }}"></vue-nav>
	@endauth
	@guest
		<vue-nav></vue-nav>
	@endguest
</header>