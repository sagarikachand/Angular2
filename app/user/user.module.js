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
var common_1 = require("@angular/common");
var user_profile_component_1 = require("./user-profile.component");
var router_1 = require("@angular/router");
var userProfileRoutes_1 = require("./userProfileRoutes");
var user_login_component_1 = require("./user-login.component");
var forms_1 = require('@angular/forms');
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(userProfileRoutes_1.UserProfileRoutes)],
            declarations: [user_profile_component_1.UserProfileComponent, user_login_component_1.UserLoginComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map