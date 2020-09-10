import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoAttrs } from './../../todo.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Priority } from '../../Priority.enum';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  @Output() addTodo = new EventEmitter<TodoAttrs>();

  form: FormGroup;

  priorities = Object.values(Priority);

  constructor() {
    this.form = new FormGroup({
      text: new FormControl(null, {
        validators: [Validators.required]
      }),
      priority: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  onSubmit(): void {
    console.log(this.form.value)
    if (this.form.valid) {
      this.addTodo.emit(this.form.value);
      this.form.reset();
    }
  }

}
