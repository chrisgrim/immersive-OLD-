<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
h1, h2, h3   {margin:0rem;font-family: 'Montserrat', sans-serif;}
p    {margin:1rem 0rem;font-family: 'Helvetica', sans-serif;color:#060606;font-size: 16px;line-height: 150%;}
.event-body {max-width: 600px;margin: auto;padding: 2rem 1rem;  }
.event-body__image, .event-body__title, .event-body__details {margin-bottom: 2rem;}
.event-body__image img{width:100%;}
.event-body__linebreak {margin:4rem 2rem;border-bottom: 1px solid grey;}
</style>

<body style="margin:0;margin-top: 5%;">
    <div>
        <div style="max-width: 550px;margin: auto;padding: 0rem 1rem;">
            <div style="text-align: center;">
                <h2 style="font-family: 'Secular One', sans-serif;font-size: 3rem;margin-bottom: 1rem;">EI Newsletter</h2>
            </div>
        </div>
        <div style="
            background: #1abdb6;
            padding: 2rem 0rem;
            display: inline-block;
            width: 100%;
            ">
            <div style="text-align: center;max-width: 550px;margin: auto;padding: 0rem 1rem;">
            </div>
        </div>
        @foreach ($events as $event)
            <div class="event-body">
                <div class="event-body__image">
                    <img src="https://everythingimmersive.com/storage/{{$event->thumbImagePath}}" alt="LA: Welcome Home">
                </div>
                <div class="event-body__title">
                    <a href="https://everythingimmersive.com/events/{{$event->slug}}"><h3>{{$event->name}}</h3></a>
                    <p style="margin-top:0rem;">{{$event->tag_line}}</p>
                </div>
                <div class="event-body__details">
                    <p>
                        <span>September 11–12, 18 — 19;</span>
                        @if($event->hasLocation)
                            {{$event->location->home . ' ' . $event->location->street}}, {{$event->location->city}},{{$event->location->postal_code}}, {{$event->location->region}}, {{$event->location->country}}
                        @else
                            Check out the event virtually
                        @endif
                            
                        <span>{{$event->price_range}};</span>
                        <br>
                        <span>Tags: 
                            @if($event->genres)
                                @foreach($event->genres as $genre)
                                    #{{$genre->name}}, 
                                @endforeach
                            @endif
                        </span>
                    </p>
                </div>
                <div class="event-body__description">
                    <p>{{$event->description}}
                    </p>
                </div>
                <div class="event-body__linebreak">
                    
                </div>
            </div>
        @endforeach
    </div>
</body>