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
var forms_1 = require('@angular/forms');
var user_auth_service_1 = require('./user.auth.service');
var router_1 = require('@angular/router');
var UserProfileComponent = (function () {
    function UserProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        console.log("oninit");
        console.log(this.authService.currentUser.firstName);
        this.firstName = new forms_1.FormControl(this.authService.currentUser.firstName, [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-z].*')]);
        this.lastName = new forms_1.FormControl(this.authService.currentUser.lastName, forms_1.Validators.required);
        this.profileForm = new forms_1.FormGroup({
            lastName: this.lastName,
            firstName: this.firstName
        });
    };
    UserProfileComponent.prototype.saveProfile = function (value) {
        console.log(this.profileForm.valid);
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(value);
        }
    };
    UserProfileComponent.prototype.validateLastName = function () {
        return this.lastName.valid || this.lastName.untouched;
    };
    UserProfileComponent.prototype.validateFirstName = function () {
        return this.firstName.valid || this.firstName.untouched;
    };
    UserProfileComponent.prototype.cancel = function () {
        this.router.navigate(['events']);
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user/user-profile.component.html',
            styles: [
                "\n      em{float:right;padding-left:10px;color:#E05C65}\n      .error input{background-color: #E3c3c5}\n     .error::-webkit-input-placeholder{color: #999}\n     .error::-moz-placeholder{color: #999}\n     .error::-ms-input-placeholder{color: #999}\n     \n     "
            ]
        }), 
        __metadata('design:paramtypes', [user_auth_service_1.UserAuthService, router_1.Router])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map