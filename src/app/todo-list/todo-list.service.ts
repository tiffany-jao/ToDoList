import { Injectable, Inject} from '@angular/core';
import { TodoItem } from './todo-item.model';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { map } from 'rxjs/operators';

const STORAGE_KEY = 'local_todolist';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[] = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    const localTodoList = this.storage.get(STORAGE_KEY) || [];
    localTodoList.map(todo => this.todoList.push(new TodoItem(todo.task, todo.complete)));
  }

  getList() : TodoItem[] {
    return this.todoList;
  }

  add(title: string): void {
    this.todoList.push(new TodoItem(title));
    this.storage.set(STORAGE_KEY, this.todoList);
  }
  update(index: number, newTodo: TodoItem) {
    this.todoList[index] = newTodo;
    this.storage.set(STORAGE_KEY, this.todoList);
  }

  remove(index: number): void {
    this.todoList.splice(index, 1);
    this.storage.set(STORAGE_KEY, this.todoList);
  }
}
