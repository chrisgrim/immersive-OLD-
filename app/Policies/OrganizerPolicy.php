<?php

namespace App\Policies;

use App\Organizer;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class OrganizerPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can edit the organizer.
     *
     * @param  \App\User  $user
     * @param  \App\Organizer  $Organizer
     * @return mixed
     */
    public function update(User $user, Organizer $Organizer)
    {
        return $organizer->user_id == $user->id || $user->isModerator();
    }
}
