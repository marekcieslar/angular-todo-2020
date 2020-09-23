import { Priority } from './../Priority.enum';
import { Todo } from './../../todo';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoAttrs } from '../todo.interface';

@Injectable()
export class TodoService {
  todos$ = new BehaviorSubject<Todo[]>([]);

  constructor() {
    // const t0 = this.addTodo({
    //   text: 'angular material',
    //   priority: Priority.a,
    // });
    // const t1 = this.addTodo({
    //   text: 'logger',
    //   priority: Priority.b,
    // });
    // const t2 = this.addTodo({
    //   text: 'sort by done and priority',
    //   priority: Priority.a,
    // });
    // const t3 = this.addTodo({
    //   text: 'update tests',
    //   priority: Priority.a,
    // });
    // const t4 = this.addTodo({
    //   text: 'footer visuals',
    //   priority: Priority.c,
    // });
    // const t5 = this.addTodo({
    //   text: 'add snackbar',
    //   priority: Priority.b,
    // });
    // const t6 = this.addTodo({
    //   text: 'change checkbox to directive',
    //   priority: Priority.a,
    // });
    // const t7 = this.addTodo({
    //   text: 'test - no red in console',
    //   priority: Priority.a,
    // });
    // const t8 = this.addTodo({
    //   text: 'test - todo service',
    //   priority: Priority.a,
    // });
    // const t9 = this.addTodo({
    //   text: 'directive tests',
    //   priority: Priority.a,
    // });
    // const t10 = this.addTodo({
    //   text: 'test - header, footer, nav',
    //   priority: Priority.a,
    // });
    // const t11 = this.addTodo({
    //   text: 'test - todo list',
    //   priority: Priority.a,
    // });
    // const t12 = this.addTodo({
    //   text: 'test - todo add',
    //   priority: Priority.a,
    // });
    // const t13 = this.addTodo({
    //   text: 'doing now section',
    //   priority: Priority.b,
    // });
    // const t14 = this.addTodo({
    //   text: 'test - doing now',
    //   priority: Priority.b,
    // });

    // t0.done = true;
    // t2.done = true;
    // t4.done = true;
    // t6.done = true;
    // t7.done = true;
    // t8.done = true;
    // t9.done = true;
    // t10.done = true;
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
  editTodo(todo: TodoAttrs): void {
    console.log('TodoService - edit');
    const todos = this.todos$.getValue();
    const index = todos.findIndex((t) => t.id === todo.id);
    todos[index] = new Todo(todo);
    this.todos$.next([...todos]);
  }
}
