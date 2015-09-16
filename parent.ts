/// <reference path="typings/angular2/angular2.d.ts" />
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
class ChildComponent {
  message: string;
  constructor() {
    this.message = "I'm the child";
  }
}


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
class ParentComponent {
  message: string;
  constructor() {
    this.message = 'Im the parent';
  }
}


bootstrap(ParentComponent);