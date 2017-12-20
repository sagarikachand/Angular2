import { EventService } from "./shared/event.service";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { IEvent } from "./index";


// The reseolver subscribe the observable for us. SO HERE WE DO NOT HAVE TO SUBSCRIBE.
// Otherwise in a general case we have to subscribe

@Injectable()
export class EventResolver implements Resolve<any>{
    event:IEvent;
    constructor(private eventservice : EventService){     }
    //Resolve method gets activatedRouteSnapshot
   resolve(activatedRouteSS:ActivatedRouteSnapshot) {
    return this.eventservice.getEvent((activatedRouteSS.params['id']));
   }
}