// Session list componemt---- It takes sessions array of a particular event and the sort&filter criterion.
//Displays the sessions related to that event, also handles sorting and filtering.
//This component has a child upvote Component. This component provides the session, the voter array length and 
//vote status to upvote component. upVote in turn notifies of voting changes.
//When the voting changes is notified this component use VoterService to decide on the action.
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var voter_service_1 = require('./voter.service');
var user_auth_service_1 = require("../../user/user.auth.service");
var SessionListComponent = (function () {
    function SessionListComponent(authService, voterService) {
        this.authService = authService;
        this.voterService = voterService;
        this.visibleSession = [];
    }
    SessionListComponent.prototype.ngOnChanges = function () {
        console.log("ngOnChanges");
        if (this.sessions) {
            this.filterSession(this.filterBy);
        }
    };
    SessionListComponent.prototype.toggleVote = function (session) {
        console.log(this.userHasVoted(session) + "::" + session.name);
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
        }
        else {
            console.log("inside add");
            this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
        }
        if (this.sortBy == 'votes') {
            this.visibleSession.sort(sortByVotesDesc);
        }
    };
    SessionListComponent.prototype.userHasVoted = function (session) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    };
    SessionListComponent.prototype.filterSession = function (filter) {
        console.log("filtersession");
        if (filter === 'all') {
            this.visibleSession = this.sessions.slice(0);
        }
        else {
            this.visibleSession = this.sessions.filter(function (session) {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
        this.sortBy === 'name' ?
            this.visibleSession.sort(sortByNameAsc) :
            this.visibleSession.sort(sortByVotesDesc);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SessionListComponent.prototype, "sessions", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SessionListComponent.prototype, "filterBy", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SessionListComponent.prototype, "sortBy", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SessionListComponent.prototype, "eventId", void 0);
    SessionListComponent = __decorate([
        core_1.Component({
            selector: "sessions-list",
            templateUrl: "app/events/event-details/sessions-list.component.html"
        }), 
        __metadata('design:paramtypes', [user_auth_service_1.UserAuthService, voter_service_1.VoterService])
    ], SessionListComponent);
    return SessionListComponent;
}());
exports.SessionListComponent = SessionListComponent;
function sortByNameAsc(s1, s2) {
    if (s1.name > s2.name)
        return 1;
    else if (s1.name === s2.name)
        return 0;
    else
        return -1;
}
function sortByVotesDesc(s1, s2) {
    //console.log("sort by votes");
    return s2.voters.length - s1.voters.length;
}
//# sourceMappingURL=sessions-list.component.js.map