import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { Router } from "@angular/router";




@Injectable()
export class UserAuthService{
    currentUser: IUser;
    constructor(private router:Router){}
setAuth(userName,Password){
    this.currentUser={
          id:1,
          firstName:'Ron',
          lastName:'Pollack',
          userName:userName
    }

    
}
isAuthenticated(){
    return !!this.currentUser;
    
}

updateCurrentUser(value){
    console.log("indside auth update");
    this.currentUser.firstName=value.firstName
    this.currentUser.lastName=value.lastName
    this.router.navigate(['events']);
}


    
    

      
}