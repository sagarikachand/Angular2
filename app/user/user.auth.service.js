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
var router_1 = require("@angular/router");
var Rx_1 = require('rxjs/Rx');
var http_1 = require('@angular/http');
var UserAuthService = (function () {
    function UserAuthService(router, http) {
        this.router = router;
        this.http = http;
    }
    UserAuthService.prototype.setAuth = function (userName, Password) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        // here in this application the property name is username and password, all lower case
        //these properties depend on the end point that is in use
        var loginInfo = { username: userName, password: Password };
        // Here we are chaning a do method. This is used when you want to perform an action after you receive the response,
        //but not changing, unlike map where it does change it.
        return this.http.post('/api/login', JSON.stringify(loginInfo), options)
            .do(function (response) {
            _this.currentUser = response.json().user;
        }).catch(function (error) {
            return Rx_1.Observable.of(false);
            // Returning an Observable of a single value false
        });
        //Here the response is an json object with a user property in it. This will depend on the endpoint.
    };
    // This endpoint returns the currentuser if logged in.
    //The response body will be empty if user has not logged in.
    //The server will either send back a json string or an empty string
    //Since Typescript knows that the typeof response is 'Response' and there is no
    //_body property, it will throw an error.
    //In our case there exixts a property _body. So we typecast response to any
    UserAuthService.prototype.checkUserLoginStatus = function () {
        var _this = this;
        this.http.get('/api/currentIdentity')
            .map(function (response) {
            if (response._body) {
                return response.json(); //This is the user object
            }
            else {
                return {}; //If not logged in return empty object
            }
        })
            .do(function (currentUser) {
            if (!!currentUser.userName) {
                _this.currentUser = currentUser;
            }
        }).subscribe();
    };
    UserAuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    UserAuthService.prototype.updateCurrentUser = function (value) {
        console.log("indside auth update");
        this.currentUser.firstName = value.firstName;
        this.currentUser.lastName = value.lastName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put("/api/users/" + this.currentUser.id, JSON.stringify(this.currentUser), options);
    };
    UserAuthService.prototype.logout = function () {
        this.currentUser = undefined;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/logout', JSON.stringify({}), options);
    };
    UserAuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], UserAuthService);
    return UserAuthService;
}());
exports.UserAuthService = UserAuthService;
//Without any HTTP
// setAuth(userName,Password){
//     this.currentUser={
//           id:1,
//           firstName:'Ron',
//           lastName:'Pollack',
//           userName:userName
//     } 
//# sourceMappingURL=user.auth.service.js.map