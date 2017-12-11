import { Component, Output,EventEmitter } from "@angular/core";
import { FormsModule,ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { RequiredValidator } from "@angular/forms/src/directives/validators";
import { ISession } from "../index";
import {restrictedWords} from '../shared/restricted-words.validator'


@Component({
    selector:'create-session',
    templateUrl: "app/events/event-details/create-session.component.html",
    styles: [
        `
          em{float:right;padding-left:10px;color:#E05C65}
          .error input{background-color: #E3c3c5}
         .error::-webkit-input-placeholder{color: #999}
         .error::-moz-placeholder{color: #999}
         .error::-ms-input-placeholder{color: #999}
         .error textarea{background-color: #E3c3c5}
         .error::-webkit-textarea-placeholder{color: #999}
         .error::-moz-placeholder{color: #999}
         .error::-ms-input-placeholder{color: #999}
         
         `  
      ]
})
export class CreateSessionComponent implements OnInit{ 
     newSessionForm :FormGroup;
     name :FormControl;
     presenter:FormControl;
     duration:FormControl;
     level:FormControl;
     abstract:FormControl;

     @Output() saveNewSession= new EventEmitter();
     @Output() cancelNewSession=new EventEmitter();
    
    ngOnInit(){
        
        this.name= new FormControl('',Validators.required);
        this.presenter= new FormControl('',Validators.required);
        this.duration= new FormControl('',Validators.required);
        this.level= new FormControl('',Validators.required);
        this.abstract= new FormControl('',[Validators.required,Validators.maxLength(400),
        restrictedWords(['foo','bar'])]);

        this.newSessionForm= new FormGroup({
            name:this.name,
            presenter:this.presenter,
            duration:this.duration,
            level: this.level,
            abstract:this.abstract
       
          });
        }    
   
 
     
  
   saveSession(sessionFormValue){

    let session:ISession={
        id:undefined,
        name:sessionFormValue.name,
        presenter:sessionFormValue.presenter,
        duration:+sessionFormValue.duration,
        level:sessionFormValue.level,
        abstract:sessionFormValue.abstract,
        voters:[]

    }
    console.log('emitting');
     this.saveNewSession.emit(session);
       console.log(sessionFormValue);
   }

   cancel(){
       console.log('cancel emitting');
       this.cancelNewSession.emit();
   }
}  
 
