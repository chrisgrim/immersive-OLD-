		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="This is a secret webpage">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @yield('head')
        <script src="/js/manifest.js" defer=""></script>
        <script src="/js/vendor.js" defer=""></script>
        <script src="/js/app.js" defer=""></script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id={{Config::get('services.analytics.id')}}"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', {{Config::get('services.analytics.id')}});
        </script>

