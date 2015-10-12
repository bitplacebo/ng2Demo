/// <reference path="typings/angular2/angular2.d.ts" />
import {bootstrap} from 'angular2/angular2';
import {FriendsService} from 'models/friends.service';

import {DisplayComponent} from 'components/DisplayComponent'



bootstrap(DisplayComponent, [FriendsService]);
