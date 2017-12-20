import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core'
import { JQ_TOKEN } from './jquery.service'

@Component({
  selector: 'simple-modal',
  //The reference variable string should be all lowercase
  //The elementId is passed on by nav bar component
  template: `             
  <div id="{{elementId}}" #modalrefvariable class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body" (click)="closeModal()">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .modal-body { height: 250px; overflow-y: scroll; }
  `]
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId:string
  @Input() closeOnBodyClick: string
  @ViewChild('modalrefvariable') modalEle:ElementRef;
  constructor(@Inject(JQ_TOKEN) private $:any){} 
  // Injecting jQuery to use .modal method on the modal Ele

  closeModal(){ //run this methos when modal body is clicked
    if(this.closeOnBodyClick.toLocaleLowerCase()==='true')
     this.$(this.modalEle.nativeElement).modal('hide');

  }
  
  //Can also use ViewChildren -- If there is a collection of elements of we want the hold of them
  //ContentView- to get projected content 
  //ContentChildren- to get hold of collection of elements inside of Content

}