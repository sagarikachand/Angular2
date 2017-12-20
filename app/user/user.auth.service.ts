import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { Router } from "@angular/router";
import {Observable} from 'rxjs/Rx';
import {Http,Headers,RequestOptions,Response} from  '@angular/http';




@Injectable()
export class UserAuthService{
    currentUser: IUser;
    constructor(private router:Router, private http :Http){}

setAuth(userName,Password){
    
    let headers=new Headers({'Content-Type':'application/json'});
    let options= new RequestOptions({headers: headers});

    // here in this application the property name is username and password, all lower case
    //these properties depend on the end point that is in use
    let loginInfo= {username:userName,password:Password}

    // Here we are chaning a do method. This is used when you want to perform an action after you receive the response,
    //but not changing, unlike map where it does change it.
     return this.http.post('/api/login',JSON.stringify(loginInfo),options)
     .do(response=>{
         this.currentUser= <IUser>response.json().user;
     }).catch(error=>{
        return Observable.of(false);
        // Returning an Observable of a single value false
     });
     //Here the response is an json object with a user property in it. This will depend on the endpoint.
    
}
// This endpoint returns the currentuser if logged in.
//The response body will be empty if user has not logged in.
//The server will either send back a json string or an empty string
//Since Typescript knows that the typeof response is 'Response' and there is no
//_body property, it will throw an error.
//In our case there exixts a property _body. So we typecast response to any
checkUserLoginStatus(){
    this.http.get('/api/currentIdentity')
       .map((response:any)=>{
        if(response._body){
           return response.json();    //This is the user object
        }else{
            return {}  //If not logged in return empty object
        }
        })
        .do(currentUser=>{
            if(!!currentUser.userName){
               this.currentUser=currentUser;
            }
        }).subscribe();
}
isAuthenticated(){
    return !!this.currentUser;
    
}

updateCurrentUser(value){
    console.log("indside auth update");
    this.currentUser.firstName=value.firstName;
    this.currentUser.lastName=value.lastName;

    let headers=new Headers({'Content-Type':'application/json'});
    let options= new RequestOptions({headers: headers});

   return this.http.put(`/api/users/${this.currentUser.id}`,JSON.stringify(this.currentUser),options);
  
}

logout(){
    this.currentUser =undefined;
    let headers=new Headers({'Content-Type':'application/json'});
    let options= new RequestOptions({headers: headers});
    return this.http.post('/api/logout',JSON.stringify({}),options);
}


      
}



//Without any HTTP
// setAuth(userName,Password){
//     this.currentUser={
//           id:1,
//           firstName:'Ron',
//           lastName:'Pollack',
//           userName:userName
//     }