import { Component,Input ,OnChanges} from "@angular/core";
import { ISession } from "../index";



@Component({
    selector:"sessions-list",
    templateUrl:"app/events/event-details/sessions-list.component.html"

})

export class SessionListComponent implements OnChanges{
    @Input() sessions:ISession[]
    @Input() filterBy:string
    @Input() sortBy:string
    visibleSession:ISession[]=[];

     ngOnChanges(){
         console.log("ngOnChanges");
         if(this.sessions){
             this.filterSession(this.filterBy);
         }
     }
    
     filterSession(filter){
         console.log("filtersession")
         if(filter==='all'){
             this.visibleSession=this.sessions.slice(0);
           
         }
         else{
            this.visibleSession= this.sessions.filter(session=> {
               return session.level.toLocaleLowerCase()===filter})
             
         }
         this.sortBy==='name'  ?
         this.visibleSession.sort(sortByNameAsc) :
         this.visibleSession.sort(sortByVotesDesc)
    }

    
}

function sortByNameAsc(s1:ISession,s2:ISession){
    console.log("sort by name");
    if(s1.name>s2.name) return 1
    else if(s1.name===s2.name) return 0
    else return -1
    
        }
function sortByVotesDesc(s1,s2){
    console.log("sort by votes");
  return s2.voters.length -s1.voters.length
}