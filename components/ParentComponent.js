var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var ChildComponent_1 = require('components/ChildComponent');
//TypeScript
var ParentComponent = (function () {
    function ParentComponent() {
        this.message = 'Im the parent';
    }
    ParentComponent = __decorate([
        angular2_1.Component({
            selector: 'parent'
        }),
        angular2_1.View({
            template: ' \
    <h1>{{ message }}</h1> \
    <child></child> \
  ',
            directives: [ChildComponent_1.ChildComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ParentComponent);
    return ParentComponent;
})();
exports.ParentComponent = ParentComponent;