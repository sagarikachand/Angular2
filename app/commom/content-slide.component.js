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
// Here we use the select attribute on ng-content to bind it to a particular section of the projected content
var ContentSlideComponent = (function () {
    function ContentSlideComponent() {
        this.visible = true;
    }
    ContentSlideComponent.prototype.toggleCard = function () {
        this.visible = !this.visible;
    };
    ContentSlideComponent = __decorate([
        core_1.Component({
            selector: 'content-slide',
            template: "\n    <div class=\"well pointable\" (click)=\"toggleCard()\">\n     <h4 >\n     <ng-content select=\"[well-title]\"></ng-content>\n     </h4>\n     <ng-content *ngIf=\"visible\" select=\"[well-body]\"></ng-content>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ContentSlideComponent);
    return ContentSlideComponent;
}());
exports.ContentSlideComponent = ContentSlideComponent;
//# sourceMappingURL=content-slide.component.js.map