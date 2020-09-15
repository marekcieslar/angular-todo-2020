import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMaterialModule } from './../../../add-material/add-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddComponent } from './todo-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoAddComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AddMaterialModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
