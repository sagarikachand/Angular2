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
var user_auth_service_1 = require("../user/user.auth.service");
var index_1 = require("../events/index");
var NavBarComponent = (function () {
    function NavBarComponent(authSevice, eventService) {
        this.authSevice = authSevice;
        this.eventService = eventService;
        this.searchKey = "";
    }
    NavBarComponent.prototype.searchSession = function (searchKey) {
        var _this = this;
        console.log(searchKey); //Calling searchSession method on eventService
        this.eventService.searchSession(searchKey).subscribe(function (sessions) { _this.foundSessions = sessions; });
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: 'app/nav/navbar.component.html',
            styles: ["\n    .nav.navbar-nav {font-size:15px;\n    #searchForm {margin-right: 100px}\n    @media (max-width: 1200px){#searchForm{display:none}}    \n    li > a.active-link{color: #f97924}\n        "]
        }), 
        __metadata('design:paramtypes', [user_auth_service_1.UserAuthService, index_1.EventService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.components.js.map