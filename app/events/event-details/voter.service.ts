import { Injectable } from "@angular/core";
import { ISession } from "../index";
import { Http ,RequestOptions,Headers,Response} from "@angular/http";

import { Observable } from "rxjs/Rx";


//Since here we do not want any response from add and delete voter we self subscribe it.And hence we do not return.
//Now they cannot take response and map it.
@Injectable()

export class VoterService{
     
     constructor(private http:Http){}
     deleteVoter(eventId:number,session:ISession,voterName:string){
         session.voters=session.voters.filter(voter=> voter!==voterName);//For local updation

         this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`).catch(this.handleError).
         subscribe();
     }
     


     addVoter(eventId:number,session:ISession,voterName:string){
        session.voters.push(voterName);

        //let url="/api/events/" + eventId + "/sessions/" + session.id + "/voters/" + voterName;
        let url=`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
               
        let headers=new Headers({'Content-Type':'application/json'});
        let options=new RequestOptions({headers:headers});

        //Here we have all data in the URl, so we strigify empty object
        this.http.post(url,JSON.stringify({}),options).catch(this.handleError).subscribe();
     }

    userHasVoted(session:ISession,voterName:string){
         return session.voters.some(voter=> voter===voterName)
    }

    private handleError(error:Response){
        return Observable.throw(error.statusText)
    }
}