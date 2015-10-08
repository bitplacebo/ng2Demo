/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var friends_service_1 = require('friends.service');
var DisplayComponent_1 = require('components/DisplayComponent');
angular2_1.bootstrap(DisplayComponent_1.DisplayComponent, [(friends_service_1.FriendsService)]);
