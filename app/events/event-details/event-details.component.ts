import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../index';


@Component({
    
    templateUrl: "app/events/event-details/event-details.component.html",
    styles:[
        `.container {padding-left:20px;padding-right:20px}
        .event-image {height:100px;}
        a {cursor:pointer}
        `
    ]
})
export class EventDetailsComponent implements OnInit{ 
    addMode: boolean=false;
   
    event:IEvent;
   constructor(private eventService:EventService,
private activatedRoute:ActivatedRoute){}
      ngOnInit(){
        this.event=this.eventService.getEvent(
            +(this.activatedRoute.snapshot.params['id']));
 }

  addSession(){
   this.addMode=true;
  }

  saveNewSession(session:ISession){
      console.log("inside savenewsession in details")
     const nextId= Math.max.apply(null,this.event.sessions.map(s=>s.id));
     session.id=nextId+1;
     this.event.sessions.push(session);
     this.eventService.updateEvent(this.event);
     this.addMode=false;
  }
  cancelNewSession(){
      console.log("cancel rec");
      this.addMode=false;
  }
}