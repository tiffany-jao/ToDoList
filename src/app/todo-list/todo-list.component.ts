import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  toDoItem = [];
  newToDo = '';

  // add current item to to do item
  // generate list from to do item

  ngOnInit() {
  }

  addToList() {
    this.toDoItem.concat(this.newToDo);
  }

}
