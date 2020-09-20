import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-doing',
  templateUrl: './todo-doing.component.html',
  styleUrls: ['./todo-doing.component.scss'],
})
export class TodoDoingComponent implements OnInit {
  @Input() activeTodo: Todo;

  @Output() cleanActiveTodo = new EventEmitter();

  title = 'Doing now';

  constructor() {}

  ngOnInit(): void {}

  onCleanActiveTodo(): void {
    this.cleanActiveTodo.emit();
  }
}
