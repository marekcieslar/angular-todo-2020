import { Todo } from './../../todo';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoAttrs } from '../todo.interface';

@Injectable()
export class TodoService {
  todos$ = new BehaviorSubject<Todo[]>([]);
  id = 1;

  constructor() {}

  addTodo(todo: TodoAttrs): void {
    console.log('TodoService - add');

    const t = new Todo(todo);
    this.todos$.next([...this.todos$.getValue(), t]);
  }

  deleteTodo(todo: Todo): void {
    console.log('TodoService - delete');

    const todos = this.todos$.getValue();
    const index = todos.findIndex((t) => t.id === todo.id);
    todos.splice(index, 1);
    this.todos$.next([...todos]);
  }

  editTodo(todo: Todo): void {
    console.log('TodoService - edit');

    const todos = this.todos$.getValue();
    const index = todos.findIndex((t) => t.id === todo.id);
    todos[index] = todo;
    this.todos$.next([...todos]);
  }
}
