import { TodoAttrs } from './../../todo.interface';
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

  @Output() updateTodo = new EventEmitter<TodoAttrs>();
  @Output() deleteTodo = new EventEmitter<Todo>();
  @Output() activeTodo = new EventEmitter<Todo>();

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
    const toChange = {...todo};

    toChange.text = this.formEditTodo.get('text').value;
    toChange.priority = this.formEditTodo.get('priority').value;

    this.updateTodo.emit(toChange);

    this.onExitEditMode();
  }

  onChangeTodoDone(todo: Todo): void {
    const toChange = {...todo};
    toChange.done = !toChange.done;
    this.updateTodo.emit(toChange);
  }

  onDeleteTodo(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

  onSetActiveTodo(todo: Todo): void {
    this.activeTodo.emit(todo);
  }
}
