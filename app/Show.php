<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Show extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
	protected $fillable = ['date','event_id'];

	/**
     * Show Model belongs to the Event Model
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function event() 
    {
        return $this->belongsTo(Event::class);
    }
    
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
     * Delete Tickets and Old Shows
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public static function deleteOld($request, $event)
    {
        $showDelete = $event->shows()->whereNotIn('date', $request->dates)->get();
        foreach($showDelete as $show){
            $show->tickets()->delete();
        }
        $event->shows()->whereNotIn('date', $request->dates)->delete();
    }

    /**
     * Saving the shows and tickets to database
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public static function saveNewShows($request, $event)
    {
        foreach( $request->dates as $date) {
            $show = Show::updateOrCreate([
                'date' => $date,
                'event_id' => $event->id
            ]);
            foreach ($request->tickets as $ticket) {
                $ticketname[] = $ticket['name'];
            };
            $show->tickets()->whereNotIn('name', $ticketname)->delete();
            foreach ($request->tickets as $ticket) {
                 $show->tickets()->updateOrCreate([
                    'name' => $ticket['name'],
                ],
                [
                    'ticket_price' => str_replace('$', '', $ticket['ticket_price'])
                ]);
            }
        };
    }

    /**
     * Get the showtimes and price range to update the event model
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public static function updateEvent($request, $event)
    {
        if ($event->shows()->exists()) {
            $lastDate = $event->shows()->orderBy('date', 'DESC')->first();
        }
        if ($event->showOnGoing()->exists()) {
            $lastDate = $event->showOnGoing()->first();
        }


        $event->priceranges()->delete();

        foreach ($request->tickets as $ticket) {
            $event->priceranges()->Create([
                'price' => $ticket['ticket_price']
            ]);
            $array[] = $ticket['ticket_price'] + 0;
        }
        rsort($array);
        if (sizeof($array) > 1) {
            $pricerange = '$'. last($array) . ' - ' . '$' . $array[0];
        } else {
            $pricerange = '$' . $array[0];
        }
        $event->update([
            'closingDate' => $lastDate->date ? $lastDate->date : Carbon::now()->addMonths(6)->format('Y-m-d H:i:s'),
            'show_times' => $request->showtimes,
            'price_range' => $pricerange,
            'showtype' => $request->shows ? 's' : ($request->onGoing && $request->always ? 'a' : 'o'),
        ]);
    }
}
