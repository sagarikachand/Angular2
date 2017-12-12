import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {RouterModule,RouterLinkActive} from  '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { EventsListComponent,
  EventThumbnailComponent,EventDetailsComponent,
  CreateEventComponent,
  EventService,EventsListResolver,EventRouteActivator, CreateSessionComponent,SessionListComponent} from './events/index'

import { NavBarComponent } from './nav/navbar.components';

import { ToastrService } from './commom/toastr.service';
import {ContentSlideComponent} from './commom/content-slide.component'

import {appRoute} from './routes'

import { ErrorComponent } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { UserAuthService } from './user/user.auth.service';




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
    ContentSlideComponent
    
    
  ],
  bootstrap: [EventsAppComponent],
  providers:[ EventService,ToastrService,EventRouteActivator,UserAuthService,
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