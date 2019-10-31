<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Information extends Model
{
    protected $fillable = [
    	'event_id','websiteUrl','ticketUrl','ageRestriction','generalPricing','militaryPricing','seniorPricing','vipPricing','allOtherPricing', 'studentPricing'
    ];
    public function event() 
    {
        return $this->hasOne(Event::class);
    }
}
