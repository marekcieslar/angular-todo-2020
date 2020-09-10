import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';
import { FormGroup, FormControl } from '@angular/forms';
import { Priority } from '../../Priority.enum';

@Component({
  selector: 'app-todo-element-list',
  templateUrl: './todo-element-list.component.html',
  styleUrls: ['./todo-element-list.component.scss']
})
export class TodoElementListComponent implements OnInit {
  @Input() todo: Todo;

  @Output() changeTodoDone = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<Todo>();
  @Output() editTodo = new EventEmitter<Todo>();

  isInEditMode = false;

  form: FormGroup;
  priorities = Object.values(Priority);

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      priority: new FormControl(this.todo.priority),
      text: new FormControl(this.todo.text),
    });
  }

  onChangeTodoDone(): void {
    console.log('TodoElementListComponent - onChangeTodoDone');

    this.changeTodoDone.emit(this.todo);
  }

  onDeleteTodo(): void {
    console.log('TodoElementListComponent - onDeleteTodo');

    this.deleteTodo.emit(this.todo);
  }

  onEnterEditMode(): void {
    console.log('TodoElementListComponent - onEnterEditMode');
    this.isInEditMode = true;
  }

  onLeaveEditMode(): void {
    console.log('TodoElementListComponent - onLeaveEditMode');

    this.isInEditMode = false;
  }

  onSubmit(): void {
    console.log('TodoElementListComponent - onSubmit');

    this.isInEditMode = false;

    this.todo.text = this.form.value.text;
    this.todo.priority = this.form.value.priority;
    this.editTodo.emit(this.todo);
  }

}
