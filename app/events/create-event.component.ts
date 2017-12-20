import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventService } from './shared/index';




@Component({
    
    templateUrl: 'app/events/create-event.component.html',
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
export class CreateEventComponent {
 
     constructor(private router :Router, private eventService:EventService){}
    isDirty:boolean= true;
     handleCancel()
     {
       this.router.navigate(['/events']);
     }  


     saveEvent(Recvalue){
       console.log(Recvalue);
       this.eventService.saveEvent(Recvalue).subscribe(e=>{
        this.isDirty=false;
        this.router.navigate(['/events'])
       });
       
      
    }
}
   
