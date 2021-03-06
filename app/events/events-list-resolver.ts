import { EventService } from "./shared/event.service";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { IEvent } from "./index";


// The reseolver subscribe the observable for us. SO HERE WE DO NOT HAVE TO SUBSCRIBE.
// Otherwise in a general case we have to subscribe

@Injectable()
export class EventsListResolver implements Resolve<any>{
    events:IEvent;
    constructor(private eventservice : EventService){     }
   resolve() {
    return this.eventservice.getEvents()
   }
}