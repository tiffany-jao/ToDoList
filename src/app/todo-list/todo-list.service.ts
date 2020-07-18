import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[] = [];

  constructor() { }

  getList() : TodoItem[] {
    return this.todoList;
  }

  add(title: string): void {
    this.todoList.push(new TodoItem(title));
  }
  remove(index: number): void {
    this.todoList.splice(index, 1);
  }
}
