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
var SessionListComponent = (function () {
    function SessionListComponent() {
        this.visibleSession = [];
    }
    SessionListComponent.prototype.ngOnChanges = function () {
        console.log("ngOnChanges");
        if (this.sessions) {
            this.filterSession(this.filterBy);
        }
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
    SessionListComponent = __decorate([
        core_1.Component({
            selector: "sessions-list",
            templateUrl: "app/events/event-details/sessions-list.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], SessionListComponent);
    return SessionListComponent;
}());
exports.SessionListComponent = SessionListComponent;
function sortByNameAsc(s1, s2) {
    console.log("sort by name");
    if (s1.name > s2.name)
        return 1;
    else if (s1.name === s2.name)
        return 0;
    else
        return -1;
}
function sortByVotesDesc(s1, s2) {
    console.log("sort by votes");
    return s2.voters.length - s1.voters.length;
}
//# sourceMappingURL=sessions-list.component.js.map