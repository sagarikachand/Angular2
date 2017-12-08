import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
    
    template: `
    <h1> This is new event"</h1>
    <hr>
    <div class="col-md-6">
    <h3>[Create event will go here]</h3>

    <br/>
    <button type="submit"  class="btn btn-primary">Save</button>
    <button type="button"  class="btn btn-primary" (click)="handleCancel()"
    >Cancel</button>

    `
    
})
export class CreateEventComponent {
 
     constructor(private router :Router){}
    isDirty:boolean= true;
     handleCancel()
     {
       this.router.navigate(['/events']);
     }  
}
   