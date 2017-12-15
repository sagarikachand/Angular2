//Here each event is taken and diplayed in small tabs
//Each tab is clikable which takes us to detail view of each event
//This detail view is achieved by routing to a route [routerLink]="['/events',event.id]"
//We are passing the event.id

import { Component, Input, Output ,EventEmitter } from '@angular/core'
import { IEvent } from './index';


@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>

      <div [ngStyle]="getTimeStyle()" [ngSwitch]="event?.time"  >Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am' ">(Early start)</span>
      <span *ngSwitchCase=" '10:00 am' ">(Late start)</span>
      <span *ngSwitchDefault>(Normal start)</span>
      
      </div>
          
      

      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
      </div>
      <div [hidden]="!event?.onlineUrl">
       <div>Online URL: {{event?.onlineUrl}}
      </div>
      
    </div>
  `,
  styles: [`
  
  .thumbnail{min-height:201px}
    .pad-left { margin-left: 10px; }
    .well div { color: #ddd; }
    
  `]
})
export class EventThumbnailComponent {
  @Input() event:IEvent
  @Output()  eventClick=new EventEmitter();

  getTimeStyle():any{
    if (this.event && this.event.time ==="8:00 am")
    {
      return {color:'green', 'font-weight':'bold'}
    }
    return {}
  }

}