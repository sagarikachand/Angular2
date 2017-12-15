
// Session list componemt---- It takes sessions array of a particular event and the sort&filter criterion.
//Displays the sessions related to that event, also handles sorting and filtering.
//This component has a child upvote Component. This component provides the session, the voter array length and 
//vote status to upvote component. upVote in turn notifies of voting changes.
//When the voting changes is notified this component use VoterService to decide on the action.


import { Component,Input ,OnChanges} from "@angular/core";
import { ISession } from "../index";
import {VoterService} from './voter.service'
import { UserAuthService } from "../../user/user.auth.service";



@Component({
    selector:"sessions-list",
    templateUrl:"app/events/event-details/sessions-list.component.html"

})

export class SessionListComponent implements OnChanges{
   
    @Input() sessions:ISession[]
    @Input() filterBy:string
    @Input() sortBy:string
    visibleSession:ISession[]=[];
    constructor(private authService:UserAuthService,
                 private voterService:VoterService){}

     ngOnChanges(){ // Whenever the @Input changes ,call filter method, filter takes care of sort as well
         console.log("ngOnChanges");
         if(this.sessions){
             this.filterSession(this.filterBy);
         }
     }

     toggleVote(session:ISession){
         console.log(this.userHasVoted(session) +"::" + session.name)
         if(this.userHasVoted(session)){
             
          this.voterService.deleteVoter(session,this.authService.currentUser.userName);
         }else{
            console.log("inside add")
            this.voterService.addVoter(session,this.authService.currentUser.userName);
         }
         if(this.sortBy=='votes'){
             this.visibleSession.sort(sortByVotesDesc);
         }
     }

     userHasVoted(session){
        return this.voterService.userHasVoted(session,this.authService.currentUser.userName);
            
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
         this.sortBy==='name'  ? //After every filter call Sort
         this.visibleSession.sort(sortByNameAsc) :
         this.visibleSession.sort(sortByVotesDesc)
    }

    
}

function sortByNameAsc(s1:ISession,s2:ISession){
    
    if(s1.name>s2.name) return 1
    else if(s1.name===s2.name) return 0
    else return -1
    
        }
function sortByVotesDesc(s1,s2){
    //console.log("sort by votes");
  return s2.voters.length -s1.voters.length
}