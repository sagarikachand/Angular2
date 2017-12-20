
import {Routes} from '@angular/router'

import { ErrorComponent } from "./errors/404.component";
import { EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent
  ,EventsListResolver,EventRouteActivator,CreateSessionComponent, EventResolver} from './events/index'


export const appRoute:Routes=[
  
  {path: 'events/new', component:CreateEventComponent, 
  canDeactivate: ['CanDeactivateCreateEvent']},
  {path:'events/:id' ,component:EventDetailsComponent, resolve:{event: EventResolver}},
  // canActivate:[EventRouteActivator]
  {path:'events/session/new' ,component:CreateSessionComponent},
  {path: 'events', component:EventsListComponent, 
  resolve : { events: EventsListResolver },
  },
  {path:'404', component:ErrorComponent},
  {path:"",redirectTo: '/events',pathMatch:'full'},
  {path:'user',loadChildren: "app/user/user.module#UserModule"}
  // When the url starts from user then load that module;
  // loadChildren: "moudule path#moduleName"
]