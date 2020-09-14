import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/todo';
import { Priority } from '../../Priority.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todo$: Observable<Todo[]>;

  @Output() updateTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<Todo>();

  priorities = Object.values(Priority);

  displayedColumns: Array<string> = [
    'id',
    'done',
    'text',
    'priority',
    'actions',
  ];

  inEdit: Todo;

  formEditTodo: FormGroup;

  constructor() {
    this.formEditTodo = new FormGroup({
      text: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)],
      }),
      priority: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit(): void {}

  onEnterEditMode(todo: Todo): void {
    this.inEdit = todo;
    this.formEditTodo.get('text').setValue(todo.text);
    this.formEditTodo.get('priority').setValue(todo.priority);
  }

  onExitEditMode(): void {
    this.inEdit = null;
  }

  onUpdateTodo(todo: Todo): void {
    todo.text = this.formEditTodo.get('text').value;
    todo.priority = this.formEditTodo.get('priority').value;

    this.updateTodo.emit(todo);

    this.onExitEditMode();
  }

  onChangeTodoDone(todo: Todo): void {
    todo.done = !todo.done;
    this.updateTodo.emit(todo);
  }

  onDeleteTodo(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }
}
