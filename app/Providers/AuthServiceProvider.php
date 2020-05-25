<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // Event::class => EventPolicy::class,
    ];

    /**
     * Register any authentication / authorization services. If user isAdmin then bypasses all security checks.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

    }
}
