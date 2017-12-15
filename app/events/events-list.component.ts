//Event-list component--- Main component that displays all events basic details.
// The job of displaying each event tab in a particular format is handled by a child Component
// called event-thumbnail.

// event-thumbnail takes each event through an *ngFor Directive.


import { Component } from '@angular/core'
import { EventService } from './shared/event.service';
import { OnInit } from '@angular/core/';

import { ActivatedRoute } from '@angular/router';
import { IEvent } from './index';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
      <event-thumbnail  [event]="event" ></event-thumbnail>
      </div>
    </div>

    
  </div>
  
  `,
  
})
export class EventsListComponent implements OnInit{
  events:IEvent
  

  constructor(private eventService:EventService,
     private activatedRoute: ActivatedRoute){}
   
 
  ngOnInit(){
    this.events=this.activatedRoute.snapshot.data['events'];// Copy i.e snapshot of data['events']
    
    // Getting the events  through routing parameter called data.
    //'events' is fetched by Event list resolver. In routes.ts it is specified that this route '/events'
    //should be resolved---- Event List resolver use EventService.
    //  {path: 'events', component:EventsListComponent, 
    //     resolve : { events: EventsListResolver },
    //   },

  }

  
}