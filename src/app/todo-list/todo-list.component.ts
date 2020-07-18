import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item.model';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private toDoService: TodoListService) { }
  toDoItems : TodoItem[] = [];
  newToDo = '';
  ngOnInit() {
    this.toDoItems = this.toDoService.getList();
  }

  add(newTodoTask: string) {
    this.toDoService.add(newTodoTask);
  }

  update(index: number, newTodo: TodoItem) {
    this.toDoService.update(index, newTodo);
  }

  removeTodo(index: number) {
    this.toDoService.remove(index);
  }

}
