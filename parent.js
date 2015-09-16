var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
//TypeScript
var ChildComponent = (function () {
    function ChildComponent() {
        this.message = "I'm the child";
    }
    ChildComponent = __decorate([
        angular2_1.Component({
            selector: 'child'
        }),
        angular2_1.View({
            template: "\n    <p> {{ message }} </p>\n  "
        })
    ], ChildComponent);
    return ChildComponent;
})();
var ParentComponent = (function () {
    function ParentComponent() {
        this.message = 'Im the parent';
    }
    ParentComponent = __decorate([
        angular2_1.Component({
            selector: 'parent'
        }),
        angular2_1.View({
            template: "\n    <h1>{{ message }}</h1>\n    <child></child>\n  ",
            directives: [ChildComponent]
        })
    ], ParentComponent);
    return ParentComponent;
})();
angular2_1.bootstrap(ParentComponent);