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
var friends_service_1 = require('friends.service');
/*
class FriendsService {
  names: Array<string>;
  
  constructor() {
    this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}
*/
var DisplayComponent = (function () {
    function DisplayComponent(friendsService) {
        friendsService = new friends_service_1.FriendsService();
        this.myName = 'Alice';
        this.names = friendsService.names;
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'display',
            bindings: [friends_service_1.FriendsService]
        }),
        angular2_1.View({
            template: "\n  <p>My name: {{ myName }}</p>\n  <p>Friends: </p>\n  <ul>\n     <li *ng-for=\"#name of names\">\n        {{ name }}\n     </li>\n  </ul>\n",
            directives: [angular2_1.NgFor]
        })
    ], DisplayComponent);
    return DisplayComponent;
})();
angular2_1.bootstrap(DisplayComponent);
