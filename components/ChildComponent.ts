/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

//TypeScript
@Component({
  selector: 'child'
})
@View({
  template: ` 
    <p> {{ message }} </p> 
  `
})
export class ChildComponent {
  message: string;
  constructor() {
    this.message = "I'm the child";
  }
}


