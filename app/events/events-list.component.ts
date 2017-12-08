import { Component } from '@angular/core'
import { EventService } from './shared/event.service';
import { OnInit } from '@angular/core/';
import { ToastrService } from '../commom/toastr.service';
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
      <event-thumbnail  [event]="event" (click)="handleClick(event)"></event-thumbnail>
      </div>
    </div>

    
  </div>
  
  `,
  
})
export class EventsListComponent implements OnInit{
  events:IEvent
  

  constructor(private eventService:EventService,
    private toastr:ToastrService, private activatedRoute: ActivatedRoute){}
   
 // 
  ngOnInit(){
    this.events=this.activatedRoute.snapshot.data['events'];

  }

  handleClick(eventName){
    console.log("click"); 
   this.toastr.success(eventName);
  }
}