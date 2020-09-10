import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoElementListComponent } from './todo-element-list.component';
import { Todo } from 'src/app/todo';
import { Priority } from '../../Priority.enum';

describe('TodoElementListComponent', () => {
  let component: TodoElementListComponent;
  let fixture: ComponentFixture<TodoElementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoElementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoElementListComponent);
    component = fixture.componentInstance;
    component.todo = new Todo({
      text: 'hello world',
      priority: Priority.c,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
