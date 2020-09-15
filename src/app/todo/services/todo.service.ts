import { Priority } from './../Priority.enum';
import { Todo } from './../../todo';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoAttrs } from '../todo.interface';

@Injectable()
export class TodoService {
  todos$ = new BehaviorSubject<Todo[]>([]);
  id = 1;

  constructor() {
    const t0 = this.addTodo({
      text: 'angular material',
      priority: Priority.a
    });
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
    const t5 = this.addTodo({
      text: 'add snackbar',
      priority: Priority.b
    });

    t0.done = true;
    t2.done = true;
    t4.done = true;
  }

  /**
   * add new todo to list
   * @param todo data for new todo
   */
  addTodo(todo: TodoAttrs): Todo {
    console.log('TodoService - add');

    const t = new Todo(todo);
    this.todos$.next([...this.todos$.getValue(), t]);
    return t;
  }

  /**
   * delete single todo from list
   * @param todo todo to delete
   */
  deleteTodo(todo: Todo): void {
    console.log('TodoService - delete');

    const todos = this.todos$.getValue();
    const index = todos.findIndex((t) => t.id === todo.id);
    todos.splice(index, 1);
    this.todos$.next([...todos]);
  }

  /**
   * edit single todo in list
   * @param todo todo with new data
   */
  editTodo(todo: Todo): void {
    console.log('TodoService - edit');

    const todos = this.todos$.getValue();
    const index = todos.findIndex((t) => t.id === todo.id);
    todos[index] = todo;
    this.todos$.next([...todos]);
  }
}
