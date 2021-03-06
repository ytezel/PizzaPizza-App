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
var AppComponent = (function () {
    function AppComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            'telefonNummer': [
                "",
                forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8),
                    forms_1.Validators.pattern('^[0-9]*$'),
                    forms_1.Validators.maxLength(8)])]
        });
    };
    AppComponent.prototype.submitTelefonNummer = function (value) {
        console.log(value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <div class=\"container\" style=\"margin-top: 40px;\"> \n        <form [formGroup]=\"loginForm\" class=\"col-xs-12\">\n          <div class=\"col-md-6 col-md-offset-3\">\n            <h4 align=\"center\">Log ind med dit telefonnummer</h4>\n            <div class=\"input-group input-group-lg\">\n              <span class=\"input-group-addon\"\n                    id=\"DK-landekode\">+45</span>\n              <input id=\"telefonNummer\"\n                     [formControl]=\"loginForm.controls['telefonNummer']\"\n                     type=\"text\" \n                     class=\"form-control\" \n                     placeholder=\"Indtast dit telefonnummer\" \n                     aria-describedby=\"DK-landekode\">\n              <span class=\"input-group-addon\" [style.color]=\"loginForm.valid ? 'green' : 'orange'\">\n                     <i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>  \n            </div>\n            <button type=\"button\" \n                    (click)=\"submitTelefonNummer(loginForm.value)\"\n                    class=\"btn btn-success btn-lg col-xs-12\"\n                    style=\"margin-top: 5px;\">KOM I GANG</button>\n          </div>\n        </form>\n      </div>\n    "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map