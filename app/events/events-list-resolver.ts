import { EventService } from "./shared/event.service";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { IEvent } from "./index";



@Injectable()
export class EventsListResolver implements Resolve<any>{
    events:IEvent;
    constructor(private eventservice : EventService){     }
   resolve() {
    return this.eventservice.getEvents().map(events=> events)
   }
     
}