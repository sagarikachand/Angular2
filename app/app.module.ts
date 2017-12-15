import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {RouterModule,RouterLinkActive} from  '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { EventsListComponent,
  EventThumbnailComponent,EventDetailsComponent,
  CreateEventComponent,
  EventService,EventsListResolver,EventRouteActivator, 
  CreateSessionComponent,SessionListComponent,DurationPipe,UpvoteComponent,
VoterService} from './events/index'

import { NavBarComponent } from './nav/navbar.components';

import { JQ_TOKEN,TOASTR_TOKEN ,Toastr,ContentSlideComponent, 
  ModalTriggerDirective, SimpleModalComponent,
} from './commom/index';


import {appRoute} from './routes'

import { ErrorComponent } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { UserAuthService } from './user/user.auth.service';

declare let toastr:Toastr;
declare let jQuery:Object;


@NgModule({
  imports: [BrowserModule,
    FormsModule,ReactiveFormsModule,
  RouterModule.forRoot(appRoute)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionListComponent,
    ContentSlideComponent,
    DurationPipe,
    ModalTriggerDirective,
    SimpleModalComponent,
    UpvoteComponent,
    
    
    
  ],
  bootstrap: [EventsAppComponent],
  providers:[ EventService,EventRouteActivator,UserAuthService,VoterService,
    {provide: TOASTR_TOKEN, useValue:toastr},
    {provide: JQ_TOKEN, useValue:jQuery},
    {
      provide:'CanDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolver
  ]
})

export class AppModule {

  
}

function checkDirtyState(recComponent:CreateEventComponent) {
  if(recComponent.isDirty==true)
    return window.confirm("You have not saved the work, Do you wish to cancel?")
    return true
  
}