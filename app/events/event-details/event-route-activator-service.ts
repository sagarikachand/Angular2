import { Injectable } from "@angular/core";

import { EventService } from "../shared/event.service";
import { Router } from "@angular/router";
import { CanActivate } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router/src/router_state";




@Injectable()
export class EventRouteActivator implements CanActivate{

    constructor( 
        private eventService:EventService,
      private router :Router){}

   canActivate(activatedRouteSs : ActivatedRouteSnapshot, ){

    const canExists= !!this.eventService.getEvent(
        +(activatedRouteSs.params['id']));

    
     console.log(canExists);
        if(!canExists){
            console.log("inside canExists")
            this.router.navigate(['/events'])
        }
        return canExists;

   }

}