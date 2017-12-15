// When we click on event-thumbnails we are routed to event-details component.
//This event-details component is concerned with a single event.
//This event list displays event details and buttons to get session add/display mode,
//buttons to get the sort and filter criterion.
//Session Display is handled by session-list child component
//Session creation is handled by create-session child component
//This path has a canActivate check-- 
//If invalid event Id is provided, The EventRouteActivator takes user back to main events route
// {path:'events/:id' ,component:EventDetailsComponent, 
// canActivate:[EventRouteActivator]},
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
var core_1 = require('@angular/core');
var event_service_1 = require('../shared/event.service');
var router_1 = require('@angular/router');
var EventDetailsComponent = (function () {
    function EventDetailsComponent(eventService, activatedRoute) {
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.addMode = false;
        this.filterBy = "all";
        this.sortBy = "votes";
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            console.log("for each" + params['id']);
            _this.event = _this.eventService.getEvent(+params['id']);
            _this.addMode = false; //reset addMode state to default 
            //Can also reset filterBy and sortBy if necessary
        }); // Use this forEach method to navigate to routes with id ,
        //Here the event state is resetting,so reset all states of the component to their defaults.
        // this.event=this.eventService.getEvent(
        //     +(this.activatedRoute.snapshot.params['id']));
    };
    EventDetailsComponent.prototype.addSession = function () {
        this.addMode = true;
    };
    EventDetailsComponent.prototype.saveNewSession = function (session) {
        console.log("inside savenewsession in details");
        var nextId = Math.max.apply(null, this.event.sessions.map(function (s) { return s.id; }));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    };
    EventDetailsComponent.prototype.cancelNewSession = function () {
        console.log("cancel rec");
        this.addMode = false;
    };
    EventDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: "app/events/event-details/event-details.component.html",
            styles: [
                ".container {padding-left:20px;padding-right:20px}\n        .event-image {height:100px;}\n        a {cursor:pointer}\n        "
            ]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.ActivatedRoute])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map