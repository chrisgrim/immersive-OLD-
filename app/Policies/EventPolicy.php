<?php

namespace App\Policies;

use App\Event;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class EventPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the event.
     *
     * @param  \App\User  $user
     * @param  \App\Event  $event
     * @return mixed
     */
    public function update(User $user, Event $event)
    {
        return $event->user_id == $user->id || $user->type == 'a' || $user->type == 'm';
    }


    /**
     * Determine whether the user can view the event.
     *
     * @param  \App\User  $user
     * @param  \App\Event  $event
     * @return mixed
     */
    public function finalize(User $user, Event $event)
    {
        return $event->status !== 'p' 
        && $event->advisories_id 
        && $event->organizer_id 
        && $event->name 
        && ($event->location_latlon || !$event->hasLocation)
        && $event->category_id 
        && $event->show_times 
        && $event->description 
        && $event->largeImagePath
        || $user->type == 'a';
    }
}
