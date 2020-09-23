import { SharedModule } from './../shared/shared.module';
import { AddMaterialModule } from '../add-material/add-material.module';
import { TodoService } from './services/todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoActiveComponent } from './components/todo-doing/todo-active.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoAddComponent,
    TodoListComponent,
    TodoActiveComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AddMaterialModule,
    SharedModule,
  ],
  providers: [TodoService],
})
export class TodoModule {}
