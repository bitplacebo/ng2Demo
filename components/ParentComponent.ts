/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';
import {ChildComponent} from 'components/ChildComponent';
//TypeScript
@Component({
  selector: 'parent'
})
@View({
  template: `
    <h1>{{ message }}</h1> 
    <child></child> 
  `,
  directives: [ChildComponent]
  
})
export class ParentComponent {
  message: string;
  constructor() {
    this.message = "I'm the parent";
  }
}