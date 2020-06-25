import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  toDoItems = [];
  newToDo = '';

  // add current item to to do item
  // generate list from to do item

  ngOnInit() {
  }

  addToList(newTodo : string) {
    this.toDoItems.push(newTodo);

  }
  removeTodo(i: number) {
    this.toDoItems.splice(i, 1);
  }

}
