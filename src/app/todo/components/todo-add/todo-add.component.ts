import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { TodoAttrs } from './../../todo.interface';
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Priority } from '../../Priority.enum';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent {
  @Output() addTodo = new EventEmitter<TodoAttrs>();

  form: FormGroup;
  @ViewChild('formAddTodo') private formAddTodo: NgForm;

  priorities = Object.values(Priority);

  constructor() {
    this.form = new FormGroup({
      text: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)],
      }),
      priority: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }

  /**
   * submit form and add new todo/ or do nothing
   */
  onSubmit(): void {
    if (this.form.valid) {
      this.addTodo.emit(this.form.value);
      this.form.reset();
      this.formAddTodo.resetForm();
    }
  }
}
