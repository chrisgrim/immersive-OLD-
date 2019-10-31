<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
	protected $fillable = ['name','ticket_price','show_id'];

    public function event() 
    {
        return $this->belongsTo(Show::class);
    }
}
