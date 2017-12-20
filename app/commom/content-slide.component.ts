import { Component ,Input} from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';



// Here we use the select attribute on ng-content to bind it to a particular section of the projected content
@Component({
    selector: 'content-slide',
    template:`
    <div class="well pointable" (click)="toggleCard()">
     <h4 >
     <ng-content select="[well-title]"></ng-content>
     </h4>
     <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
    ` 
    
})
export class ContentSlideComponent { 
   

visible:boolean=true;

toggleCard(){
    this.visible=!this.visible;
}

 
}