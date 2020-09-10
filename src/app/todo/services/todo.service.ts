import { Todo } from './../../todo';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TodoService {
  todos$ = new BehaviorSubject<Todo[]>([]);
  id = 1;

  constructor() {}

  addTodo(todo: Todo): void {
    this.todos$.next([...this.todos$.getValue(), todo]);
  }

  deleteTodo(todo: Todo): void {
    const todos = this.todos$.getValue();
    const index = todos.findIndex((t) => t.id === todo.id);
    todos.splice(index, 1);
    this.todos$.next([...todos]);
  }

  editTodo(todo: Todo): void {
    const todos = this.todos$.getValue();
    const index = todos.findIndex((t) => t.id === todo.id);
    todos[index] = todo;
    this.todos$.next([...todos]);
  }
}
