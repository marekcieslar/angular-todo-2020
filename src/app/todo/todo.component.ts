import { TodoAttrs } from './todo.interface';
import { Todo } from './../todo';
import { TodoService } from './services/todo.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todo$ = this.todoService.todos$.pipe(
    map((data) =>
      data.sort((a, b) => {
        if (a.done === b.done) {
          if (a.priority === b.priority) {
            return 0;
          } else if (a.priority < b.priority) {
            return -1;
          } else {
            return 1;
          }
        } else if (a.done < b.done) {
          return -1;
        } else {
          return 1;
        }
      })
    )
  );

  titles = {
    active: 'Active TODO',
    add: 'Add new TODO',
    list: 'List of TODO',
  };

  activeTodo: Todo = null;

  constructor(private readonly todoService: TodoService) {}

  addTodo(todo: TodoAttrs): void {
    this.todoService.addTodo(todo);
  }

  deleteTodo(todo: Todo): void {
    console.log('TodoComponent - deleteTodo');

    this.todoService.deleteTodo(todo);
    if (this.activeTodo.id === todo.id) {
      this.activeTodo = null;
    }
  }

  editTodo(todo: TodoAttrs): void {
    console.log('TodoComponent - editTodo');

    this.todoService.editTodo(todo);

    // edit or clean active todo
    // if change text or priority than update todo
    // if change done than clear active todo
    if (this.activeTodo?.id === todo.id) {
      if (this.activeTodo.done !== todo.done) {
        this.activeTodo = null;
      } else {
        this.activeTodo = new Todo(todo);
      }
    }
  }

  onActiveTodo(todo: Todo): void {
    this.activeTodo = todo;
  }
}
