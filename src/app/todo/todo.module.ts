import { AddMaterialModule } from '../add-material/add-material.module';
import { TodoService } from './services/todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoElementListComponent } from './components/todo-element-list/todo-element-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoComponent, TodoAddComponent, TodoElementListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AddMaterialModule,
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
