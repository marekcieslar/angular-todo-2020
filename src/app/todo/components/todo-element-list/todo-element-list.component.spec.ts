import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoElementListComponent } from './todo-element-list.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
