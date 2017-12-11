import { Component,Input } from "@angular/core";
import { ISession } from "../index";



@Component({
    selector:"sessions-list",
    templateUrl:"app/events/event-details/sessions-list.component.html"

})

export class SessionListComponent{
    @Input() sessions:ISession

    
}