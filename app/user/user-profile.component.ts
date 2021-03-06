import { Component,Inject} from '@angular/core'
import { OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from './user.auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../commom/toastr.service';


@Component({
  templateUrl: 'app/user/user-profile.component.html',
  styles: [
    `
      em{float:right;padding-left:10px;color:#E05C65}
      .error input{background-color: #E3c3c5}
     .error::-webkit-input-placeholder{color: #999}
     .error::-moz-placeholder{color: #999}
     .error::-ms-input-placeholder{color: #999}
     
     `  
  ]
  
    
})
export class UserProfileComponent implements OnInit{
  profileForm: FormGroup;
  private firstName;
  private lastName;
       constructor(private authService:UserAuthService,
      private router:Router,
         @Inject(TOASTR_TOKEN) private toastr:Toastr){}

      ngOnInit(){
        console.log("oninit")
        console.log(this.authService.currentUser.firstName);
       this.firstName=new FormControl(this.authService.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-z].*') ]);
        this.lastName=new FormControl(this.authService.currentUser.lastName,Validators.required);


      
       this.profileForm= new FormGroup({
         lastName:this.lastName,
         firstName:this.firstName
       });
          
       }

       saveProfile(value){
         console.log(this.profileForm.valid)
         if(this.profileForm.valid){
          this.authService.updateCurrentUser(value).subscribe(()=>{
            this.toastr.success('Saved Succesfully');
          });
          
         }
      
       }

       validateLastName(){
         return this.lastName.valid || this.lastName.untouched
       }

       validateFirstName(){
        return this.firstName.valid || this.firstName.untouched
      }
      
       
       cancel(){
        this.router.navigate(['events']) ;
      }
      logout(){
        this.authService.logout().subscribe(()=>{
          this.router.navigate(['user/login']);
        })
      }
      }
