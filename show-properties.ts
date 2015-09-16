/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor, NgIf, Inject} from 'angular2/angular2';
import {FriendsService} from 'friends.service';



@Component({
  selector: 'display'
  
})
@View({
   template: `
  <p>My name: {{ myName }}</p>
  <p>Friends: </p>
  <ul>
     <li *ng-for="#name of names">
        {{ name }}
     </li>
  </ul>
  <p *ng-if="names.length > 6">You have many friends!</p>
`,
   directives: [NgFor, NgIf]
})

class DisplayComponent {
  myName: string;
  names: Array<string>;
  
    constructor(@Inject(FriendsService) friendsService){
      
   this.myName = 'Alice';
   this.names = friendsService.names;
  }
}

bootstrap(DisplayComponent, [(FriendsService)]);
