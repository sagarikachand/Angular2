import { Component } from "@angular/core";
import { UserAuthService } from "./user.auth.service";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";




@Component({
    templateUrl:'app/user/user-login.component.html'
})
export class UserLoginComponent{

    constructor(private userAuthService: UserAuthService, private router: Router){}
    login(formValue){
        this.userAuthService.setAuth(formValue.userName,formValue.password)
        this.router.navigate(['events'])
    }
    cancel(){
        this.router.navigate(['events']);
    }

}