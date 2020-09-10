import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoElementListComponent } from './todo-element-list.component';
import { Todo } from 'src/app/todo';
import { Priority } from '../../Priority.enum';

describe('TodoElementListComponent', () => {
  let component: TodoElementListComponent;
  let fixture: ComponentFixture<TodoElementListComponent>;
  let checkbox: HTMLInputElement;
  let btnEdit: HTMLElement;
  let btnSubmit: HTMLElement;
  let btnLeaveEdit: HTMLElement;
  let btnDelete: HTMLElement;
  let inputText: HTMLInputElement;
  let selectPriority: HTMLSelectElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoElementListComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoElementListComponent);
    component = fixture.componentInstance;
    component.todo = new Todo({
      text: 'hello world',
      priority: Priority.c,
    });
    fixture.detectChanges();
    checkbox = fixture.nativeElement.querySelector('#done');
    btnEdit = fixture.nativeElement.querySelector('#btn-edit');
    btnDelete = fixture.nativeElement.querySelector('#btn-delete');
    btnSubmit = fixture.nativeElement.querySelector('#btn-submit');
    btnLeaveEdit = fixture.nativeElement.querySelector('#btn-leave-edit');

    inputText = fixture.nativeElement.querySelector('input#text');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checkbox should not be checked - done is false', () => {
    expect(checkbox.checked).toEqual(false);
  });

  it('should be checked after click', () => {
    checkbox.click();
    expect(checkbox.checked).toEqual(true);
  });

  it('edit mode should be hidden', () => {
    expect(inputText).toEqual(null);
  });

  it('should call onEnterEditMode', () => {
    spyOn(component, 'onEnterEditMode');
    btnEdit.click();
    expect(component.onEnterEditMode).toHaveBeenCalled();
  });

  it('should enter edit mode', () => {
    btnEdit.click();
    expect(component.isInEditMode).toBeTrue();

    fixture.detectChanges();

    // check input
    inputText = fixture.nativeElement.querySelector('input#text');
    expect(inputText.value).toEqual(component.todo.text);

    // check select
    selectPriority = fixture.nativeElement.querySelector('select#priority');
    expect(selectPriority.value).toEqual(component.todo.priority);
  });

  it('should call deleteTodo', () => {
    spyOn(component, 'onDeleteTodo');
    btnDelete.click();
    expect(component.onDeleteTodo).toHaveBeenCalled();
  });

  it('should back to info mode with no edit', () => {
    expect(btnLeaveEdit).toEqual(null);
    btnEdit.click();

    fixture.detectChanges();
    btnLeaveEdit = fixture.nativeElement.querySelector('#btn-leave-edit');
    expect(btnLeaveEdit).toBeTruthy();

    btnLeaveEdit.click();

    fixture.detectChanges();
    btnLeaveEdit = fixture.nativeElement.querySelector('#btn-leave-edit');
    expect(btnLeaveEdit).toEqual(null);
  });

  it('should emit editTodo.emit()', () => {
    expect(btnSubmit).toEqual(null);
    btnEdit.click();

    fixture.detectChanges();
    btnSubmit = fixture.nativeElement.querySelector('#btn-submit');
    expect(btnSubmit).toBeTruthy();

    spyOn(component.editTodo, 'emit');
    btnSubmit.click();
    expect(component.editTodo.emit).toHaveBeenCalledWith(component.todo);

  })
});
