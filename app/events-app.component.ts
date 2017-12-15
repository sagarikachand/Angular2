//Starting component that incorporated nav-bar and a router-outlet for route specific teplate
import { Component } from '@angular/core'


@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {

}