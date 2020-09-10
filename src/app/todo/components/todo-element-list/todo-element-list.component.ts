import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-element-list',
  templateUrl: './todo-element-list.component.html',
  styleUrls: ['./todo-element-list.component.scss']
})
export class TodoElementListComponent implements OnInit {
  @Input() todo: Todo;

  @Output() changeTodoDone = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeTodoDone(): void {
    this.changeTodoDone.emit(this.todo);
  }

  onDeleteTodo(): void {
    this.deleteTodo.emit(this.todo);
  }

}
