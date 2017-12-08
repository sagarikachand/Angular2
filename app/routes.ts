
import {Routes} from '@angular/router'

import { ErrorComponent } from "./errors/404.component";
import { EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent
  ,EventsListResolver,EventRouteActivator} from './events/index'


export const appRoute:Routes=[
  
  {path: 'events/new', component:CreateEventComponent, 
  canDeactivate: ['CanDeactivateCreateEvent']},
  {path:'events/:id' ,component:EventDetailsComponent, 
  canActivate:[EventRouteActivator]},
  {path: 'events', component:EventsListComponent, 
  resolve : { events: EventsListResolver },
  },
  {path:'404', component:ErrorComponent},
  {path:"",redirectTo: '/events',pathMatch:'full'},
  {path:'user',loadChildren: "app/user/user.module#UserModule"}
  // When the url starts from user then load that module;
  // loadChildren: "moudule path#moduleName"
]