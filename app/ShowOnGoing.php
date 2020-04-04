<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShowOnGoing extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = ['event_id','date','mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    /**
     * Each Show has many tickets 
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function tickets() 
    {
        return $this->morphMany(Ticket::class, 'ticket');
    }

    /**
     * Saving the shows and tickets to database
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public static function saveNewShowOnGoing($request, $event)
    {
        $ongoing = ShowOnGoing::updateOrCreate(
            [
                'event_id' => $event->id,
            ],
            [
                'mon' => $request->week['mon'],
                'tue' => $request->week['tue'],
                'wed' => $request->week['wed'],
                'thu' => $request->week['thu'],
                'fri' => $request->week['fri'],
                'sat' => $request->week['sat'],
                'sun' => $request->week['sun'],
            ]
        );
        // return $ongoing;
        foreach ($request->tickets as $ticket) {
            $ticketname[] = $ticket['name'];
        };

        $ongoing->tickets()->whereNotIn('name', $ticketname)->delete();
        
        foreach($request->tickets as $ticket) {
            $ongoing->tickets()->updateOrCreate(
                [
                    'name' => $ticket['name']
                ],
                [
                    'ticket_price' => str_replace('$', '', $ticket['ticket_price'])
                ]
            );
        }
    }
}
