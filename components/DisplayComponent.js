var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var friends_service_1 = require('friends.service');
var DisplayComponent = (function () {
    function DisplayComponent(friendsService) {
        this.myName = 'Alice';
        this.names = friendsService.names;
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'display'
        }),
        angular2_1.View({
            templateUrl: "templates/show-properties-template.html",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }),
        __param(0, angular2_1.Inject(friends_service_1.FriendsService))
    ], DisplayComponent);
    return DisplayComponent;
})();
exports.DisplayComponent = DisplayComponent;
