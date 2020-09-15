import { Todo } from './../../todo';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoAttrs } from '../todo.interface';
import { Priority } from '../Priority.enum';

@Injectable()
export class TodoService {
  todos$ = new BehaviorSubject<Todo[]>([]);
  id = 1;

  constructor() {
    const t1 = this.addTodo({
      text: 'logger',
      priority: Priority.b
    });
    const t2 = this.addTodo({
      text: 'sort by done and priority',
      priority: Priority.a
    });
    const t3 = this.addTodo({
      text: 'update tests',
      priority: Priority.a
    });
    const t4 = this.addTodo({
      text: 'footer visuals',
      priority: Priority.c
    });

    t2.done = true;
  }

  addTodo(todo: TodoAttrs): Todo {
    console.log('TodoService - add');

    const t = new Todo(todo);
    this.todos$.next([...this.todos$.getValue(), t]);
    return t;
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
