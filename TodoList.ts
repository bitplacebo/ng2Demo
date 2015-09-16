/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
@Component({
  selector: 'todo-list'
})
@View({
  templateUrl: 'templates/todo-list-template.html',
  directives: [NgFor]
})
class TodoList {
  todos: Array<string>;
  
  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }
  
  addTodo(todo: string) {
    this.todos.push(todo);
  }
  
  doneTyping($event) {
    if($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}

bootstrap(TodoList);