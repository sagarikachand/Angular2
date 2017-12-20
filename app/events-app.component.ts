//Starting component that incorporated nav-bar and a router-outlet for route specific teplate
import { Component } from '@angular/core'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserAuthService } from './user/user.auth.service';


@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit{

   constructor(private userAuth:UserAuthService){}
  // Checking user login status after every refresh
   ngOnInit(){
     this.userAuth.checkUserLoginStatus();
   }


}