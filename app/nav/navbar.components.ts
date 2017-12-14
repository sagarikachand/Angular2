import { Component } from "@angular/core";
import { UserAuthService } from "../user/user.auth.service";
import {RouterLinkActive} from '@angular/router'
import { ISession, EventService } from "../events/index";


@Component({
    selector:'nav-bar',
    templateUrl:'app/nav/navbar.component.html',
    styles:[`
    .nav.navbar-nav {font-size:15px;
    #searchForm {margin-right: 100px}
    @media (max-width: 1200px){#searchForm{display:none}}    
    li > a.active-link{color: #f97924}
        `]
})
export class NavBarComponent {
    foundSessions: ISession[];
   private searchKey:string=""
constructor(private authSevice:UserAuthService,private eventService:EventService,
){}

searchSession(searchKey){
    console.log(searchKey);
    this.eventService.searchSession(searchKey).subscribe(
        sessions=> {this.foundSessions=sessions;}
        
    )
   
}
}