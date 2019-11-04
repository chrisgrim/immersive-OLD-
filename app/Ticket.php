<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ticket extends Model
{
	use SoftDeletes;
	
	protected $fillable = ['name','ticket_price','show_id'];

    public function event() 
    {
        return $this->belongsTo(Show::class);
    }
}
