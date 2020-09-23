import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMaterialModule } from './../../../add-material/add-material.module';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoActiveComponent } from './todo-active.component';
import { Todo } from 'src/app/todo';
import { Priority } from '../../Priority.enum';

const title = 'hello world :)';
const activeTodo = new Todo({
  id: 1,
  text: 'todo 1',
  done: false,
  priority: Priority.a,
});

@Component({
  selector: 'app-parent-test',
  template: `<h1>Parent test component</h1>
    <app-todo-active
      [title]="title"
      [activeTodo]="activeTodo"
      (cleanActiveTodo)="cleanActiveTodo(null)"
    ></app-todo-active>`,
})
class ParentTestComponent {
  title = title;

  activeTodo = activeTodo;

  cleanActiveTodo(x: any): void {
    console.log({ x });
    console.log('fck');
    return null;
  }
}

describe('TodoActiveComponent', () => {
  let parentTestFixture: ComponentFixture<ParentTestComponent>;
  let parentTestComponent: ParentTestComponent;
  let parentCompiled: HTMLElement;

  let component: TodoActiveComponent;
  let fixture: ComponentFixture<TodoActiveComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AddMaterialModule, BrowserAnimationsModule],
      declarations: [ParentTestComponent, TodoActiveComponent],
    }).compileComponents();
  }));

  describe('TodoActiveComponent - itself', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(TodoActiveComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      compiled = fixture.nativeElement;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should show else statement', () => {
      expect(compiled.querySelector('p').innerText).toEqual('free time?? :)');
    });

    it('should change after add activeTodo', () => {
      component.activeTodo = activeTodo;

      fixture.detectChanges();

      expect(compiled.querySelector('span').innerText).toEqual(
        activeTodo.toString()
      );
    });

    it('should trigger cleanActiveTodo.emit()', () => {
      spyOn(component.cleanActiveTodo, 'emit');

      component.activeTodo = activeTodo;

      fixture.detectChanges();

      component.onCleanActiveTodo();
      expect(component.cleanActiveTodo.emit).toHaveBeenCalled();
    });

    it('should trigger onCleanActiveTodo() after click button', () => {
      spyOn(component, 'onCleanActiveTodo');

      component.activeTodo = activeTodo;

      fixture.detectChanges();

      compiled.querySelector('button').click();
      expect(component.onCleanActiveTodo).toHaveBeenCalled();
    });
  });

  describe('inside parent component', () => {
    beforeEach(() => {
      parentTestFixture = TestBed.createComponent(ParentTestComponent);
      parentTestComponent = parentTestFixture.componentInstance;
      parentTestFixture.detectChanges();
      parentCompiled = parentTestFixture.nativeElement;
    });

    it('should create', () => {
      expect(parentTestComponent).toBeTruthy();
    });

    it(`should have h2 with text: "${title}"`, () => {
      expect(parentCompiled.querySelector('h2').innerText).toEqual(title);
    });

    it(`should have p filled with ${activeTodo.toString()}`, () => {
      expect(parentCompiled.querySelector('span').innerText).toEqual(
        activeTodo.toString()
      );
    });

    it('should clean todo after click', () => {
      spyOn(parentTestComponent, 'cleanActiveTodo');

      console.log(parentCompiled);

      parentCompiled.querySelector('button').click();

      expect(parentTestComponent.cleanActiveTodo).toHaveBeenCalled();
    });
  });
});
