// When we click on event-thumbnails we are routed to event-details component.
//This event-details component is concerned with a single event.
//This event list displays event details and buttons to get session add/display mode,
//buttons to get the sort and filter criterion.
//Session Display is handled by session-list child component
//Session creation is handled by create-session child component
//This path has a canActivate check-- 
//If invalid event Id is provided, The EventRouteActivator takes user back to main events route
// {path:'events/:id' ,component:EventDetailsComponent, 
// canActivate:[EventRouteActivator]},

import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
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
    filterBy: string="all"  ;
    sortBy:string="votes"
   
    event:IEvent;
   constructor(private eventService:EventService,
private activatedRoute:ActivatedRoute){}

      ngOnInit(){
      this.activatedRoute.params.forEach((params:Params)=>{
          console.log("for each" + params['id']);
        this.event=this.eventService.getEvent(+params['id']);
        this.addMode=false;//reset addMode state to default 
        //Can also reset filterBy and sortBy if necessary
        
      })// Use this forEach method to navigate to routes with id ,
      //Here the event state is resetting,so reset all states of the component to their defaults.

        // this.event=this.eventService.getEvent(
        //     +(this.activatedRoute.snapshot.params['id']));
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