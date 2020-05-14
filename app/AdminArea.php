<?php

namespace App;

use App\Event;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;

class AdminArea extends Model
{
    public static function storeAirtable(Event $event)
    {
        foreach ($event->contactlevels()->get() as $level) {
            $contactlevels[] = $level->level;
        };
        foreach ($event->contentadvisories()->get() as $advisories) {
            $contentadvisories[] = $advisories->advisories;
        };
        foreach ($event->mobilityadvisories()->get() as $mobilities) {
            $mobilityadvisories[] = $mobilities->mobilities;
        };
        foreach ($event->genres()->get() as $genre) {
            $genres[] = $genre->genre;
        };
        foreach ($event->remotelocations()->get() as $remote) {
            $remotelocations[] = $remote->location;
        };

        Http::withHeaders([
            'Authorization' => 'Bearer keyFh096OT6FXNB3x',
            'Content-Type' => 'application/json'
        ])->post('https://api.airtable.com/v0/appCSC5frNVDpmzun/Submissions', [
            'fields' => [
                'Show Title' => $event->name,
                'Region' => $event->location->city ? $event->location->city : 'remote',
                'Opening Date' => $event->showtype == 's' ? $event->shows()->orderBy('date')->first()->date : Carbon::now(),
                'Closing Date' => $event->closingDate,
                'Ongoing?' => $event->showtype == 'a' || $event->showtype == 'o' ? 'yes' : 'no',
                'Embargo Date' => $event->embargo_date,
                'Where' => $event->location_latlon ? $event->location->home . ' ' . $event->location->street . ' ' . $event->location->city . ' ' . $event->location->country : implode(", ", $remotelocations),
                'Price' => $event->price_range,
                'Description' => $event->description,
                'Category' => $event->category->name,
                'Audience role' => $event->advisories->contactAdvisories,
                'Physical Contact' => implode(", ", $contactlevels),
                'Advisory for Sexual Violence' => $event->advisories->sexualViolence ? 'yes' : 'no',
                'Other Content Advisories' => implode(", ", $contentadvisories),
                'Wheelchair accessible?' => $event->advisories->wheelchairReady ? 'yes' : 'no',
                'Mobility Advisories' => implode(", ", $mobilityadvisories),
                'Age restriction (i.e. 18+, 21+)' => $event->advisories->ageRestriction,
                'Event Link' => $event->websiteUrl,
                'Production Company' => $event->organizer->name,
                'Company Website' => $event->organizer->website,
                'Image Link' => 'https://secretchickens.com/storage/' . $event->largeImagePath,
                'Primary Contact Name' => $event->organizer->user->name,
                'Email for Contact' => $event->organizer->user->email,
                'Instagram handle' => $event->organizer->instagramHandle,
                'Twitter handle' => $event->organizer->twitterHandle,
                'Facebook handle' => $event->organizer->facebookHandle,
                'Tags' => implode(", ", $genres),
                'Suggested Tag Line (Internal)' => $event->tag_line,
                'Ticket Link' => $event->ticketUrl,
            ],
        ]);
    }
}
