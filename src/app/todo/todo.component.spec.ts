import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoElementListComponent } from './components/todo-element-list/todo-element-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoService } from './services/todo.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent, TodoAddComponent, TodoElementListComponent],
      providers: [TodoService],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ]
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
