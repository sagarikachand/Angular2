import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {RouterModule,RouterLinkActive} from  '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { EventsListComponent,
  EventThumbnailComponent,EventDetailsComponent,
  CreateEventComponent,
  EventService,EventsListResolver,EventResolver, 
  CreateSessionComponent,SessionListComponent,DurationPipe,UpvoteComponent,
VoterService,LocationValidator} from './events/index'

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
    FormsModule,ReactiveFormsModule,HttpModule,
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
    LocationValidator
    
    
  ],
  bootstrap: [EventsAppComponent],
  providers:[ EventService,UserAuthService,VoterService,
    {provide: TOASTR_TOKEN, useValue:toastr},
    {provide: JQ_TOKEN, useValue:jQuery},
    {
      provide:'CanDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolver,
    EventResolver
  ]
})

export class AppModule {

  
}

function checkDirtyState(recComponent:CreateEventComponent) {
  if(recComponent.isDirty==true)
    return window.confirm("You have not saved the work, Do you wish to cancel?")
    return true
  
}