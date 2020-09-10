import { TodoAttrs } from './todo.interface';
import { Todo } from './../todo';
import { TodoService } from './services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Priority } from './Priority.enum';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos$ = this.todoService.todos$.pipe(
    map(data => data.sort((a, b) => {
      if (a.priority < b.priority) {
        return -1;
      } else if (a.priority === b.priority) {
        return 0;
      } else {
        return 1;
      }
    }))
  );

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    console.log('TodoComponent - on init');

    this.todoService.addTodo({
      text: 'from todo component',
      priority: Priority.c,
    });
  }

  addTodo(todo: TodoAttrs): void {
    this.todoService.addTodo(todo);
  }

  changeTodoDone(todo: Todo): void {
    console.log('TodoComponent - changeTodoDone');

    todo.done = !todo.done;
    this.todoService.editTodo(todo);
  }

  deleteTodo(todo: Todo): void {
    console.log('TodoComponent - deleteTodo');

    this.todoService.deleteTodo(todo);
  }

  editTodo(todo: Todo): void {
    console.log('TodoComponent - editTodo');

    this.todoService.editTodo(todo);
  }
}
