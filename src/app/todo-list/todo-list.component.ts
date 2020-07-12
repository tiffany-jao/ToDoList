import { Component, OnInit } from '@angular/core';

class TodoItem {
  task: string;
  isChecked: boolean;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  toDoItems = new Array<TodoItem>();
  newToDo = '';

  // add current item to to do item
  // generate list from to do item

  ngOnInit() {
  }

  addToList(newTodoTask: string) {
    const todo: TodoItem = {
      task: newTodoTask,
      isChecked: false
    };
    this.toDoItems.push(todo);
  }
  toggleTodo(i:number) {
    const currentTodo = this.toDoItems[i];
    let updateItem: TodoItem = {
      ...currentTodo,
      isChecked: !currentTodo.isChecked
    }
    this.toDoItems[i] = updateItem;

  }
  removeTodo(i: number) {
    this.toDoItems.splice(i, 1);
  }

}
