import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./user-profile.component";
import { Router } from "@angular/router";
import { RouterModule } from "@angular/router";
import { UserProfileRoutes } from "./userProfileRoutes";
import { UserLoginComponent } from "./user-login.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule(
    {
        imports:[CommonModule,FormsModule,ReactiveFormsModule,
        RouterModule.forChild(UserProfileRoutes)],
        declarations:[UserProfileComponent,UserLoginComponent],
        providers:[]

    }
)


export class UserModule {

}