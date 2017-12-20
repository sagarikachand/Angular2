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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var index_1 = require('./events/index');
var navbar_components_1 = require('./nav/navbar.components');
var index_2 = require('./commom/index');
var routes_1 = require('./routes');
var _404_component_1 = require('./errors/404.component');
var events_app_component_1 = require('./events-app.component');
var user_auth_service_1 = require('./user/user.auth.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule,
                router_1.RouterModule.forRoot(routes_1.appRoute)],
            declarations: [
                events_app_component_1.EventsAppComponent,
                index_1.EventsListComponent,
                index_1.EventThumbnailComponent,
                navbar_components_1.NavBarComponent,
                index_1.EventDetailsComponent,
                index_1.CreateEventComponent,
                _404_component_1.ErrorComponent,
                index_1.CreateSessionComponent,
                index_1.SessionListComponent,
                index_2.ContentSlideComponent,
                index_1.DurationPipe,
                index_2.ModalTriggerDirective,
                index_2.SimpleModalComponent,
                index_1.UpvoteComponent,
                index_1.LocationValidator
            ],
            bootstrap: [events_app_component_1.EventsAppComponent],
            providers: [index_1.EventService, user_auth_service_1.UserAuthService, index_1.VoterService,
                { provide: index_2.TOASTR_TOKEN, useValue: toastr },
                { provide: index_2.JQ_TOKEN, useValue: jQuery },
                {
                    provide: 'CanDeactivateCreateEvent',
                    useValue: checkDirtyState
                },
                index_1.EventsListResolver,
                index_1.EventResolver
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function checkDirtyState(recComponent) {
    if (recComponent.isDirty == true)
        return window.confirm("You have not saved the work, Do you wish to cancel?");
    return true;
}
//# sourceMappingURL=app.module.js.map