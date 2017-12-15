import {Directive,Inject,ElementRef,Input} from '@angular/core'
import { JQ_TOKEN } from './index';
import { OnInit } from '@angular/core';

@Directive({
    selector:'[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    @Input('modal-trigger') modalId:string
    private el:HTMLElement;     //HTMLElement is global 
    //the ElementRef is the element on which the directive is used. Directives are attributes .
    constructor(ref:ElementRef, @Inject(JQ_TOKEN) private $:any){
        this.el=ref.nativeElement
    }
    //By using ref.nativeElement the button element is available.
    //Can add event listeners to this button element
    ngOnInit(){
        this.el.addEventListener('click',(e)=>{
            this.$(`#${this.modalId}`).modal({});
        })
        // Listen for click event on search button and then open the modal with the ID passed 
        //Use jquery.modal to open the modal
    }
}