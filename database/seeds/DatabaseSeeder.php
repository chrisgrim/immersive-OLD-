<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Event;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $events = factory(Event::class, 5)->create();
        $events->each(function($event) {
        	factory('App\Date')->create(['event_id' => $event->id]);
        });
        $events->each(function($event) {
        	factory('App\Location')->create(['event_id' => $event->id]);
        });
        $regions = factory(Region::class, 5)->create();
    }
}
