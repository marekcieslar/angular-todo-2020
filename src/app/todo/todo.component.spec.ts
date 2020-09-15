import { Todo } from 'src/app/todo';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMaterialModule } from './../add-material/add-material.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoService } from './services/todo.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { BehaviorSubject } from 'rxjs';

class TodoMockService implements Partial<TodoService> {
  todos$ = new BehaviorSubject<Todo[]>([]);

  addTodo(): Todo {
    return null;
  }
  deleteTodo(): void {}
  editTodo(): void {}
}

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent, TodoAddComponent, TodoListComponent],
      providers: [{ provide: TodoService, useClass: TodoMockService }],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AddMaterialModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
