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
var user_auth_service_1 = require("./user.auth.service");
var router_1 = require("@angular/router");
var UserLoginComponent = (function () {
    function UserLoginComponent(userAuthService, router) {
        this.userAuthService = userAuthService;
        this.router = router;
        this.loginInvalid = false;
    }
    UserLoginComponent.prototype.login = function (formValue) {
        var _this = this;
        this.userAuthService.setAuth(formValue.userName, formValue.password).subscribe(function (resp) {
            if (!resp) {
                _this.loginInvalid = true;
            }
            else {
                _this.router.navigate(['events']);
            }
        });
    };
    UserLoginComponent.prototype.cancel = function () {
        this.router.navigate(['events']);
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user/user-login.component.html'
        }), 
        __metadata('design:paramtypes', [user_auth_service_1.UserAuthService, router_1.Router])
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;
//# sourceMappingURL=user-login.component.js.map