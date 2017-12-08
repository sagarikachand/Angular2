import { Component } from "@angular/core";
import { UserAuthService } from "../user/user.auth.service";
import {RouterLinkActive} from '@angular/router'


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
constructor(private authSevice: UserAuthService){}
}