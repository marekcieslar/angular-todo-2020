import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-active',
  templateUrl: './todo-active.component.html',
  styleUrls: ['./todo-active.component.scss'],
})
export class TodoActiveComponent implements OnInit {
  @Input() activeTodo: Todo;
  @Input() title: string;

  @Output() cleanActiveTodo = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onCleanActiveTodo(): void {
    this.cleanActiveTodo.emit(null);
  }
}
