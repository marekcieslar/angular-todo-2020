import { TestBed } from '@angular/core/testing';
import { Priority } from '../Priority.enum';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService],
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have empty array on start', () => {
    expect(service.todos$.getValue()).toEqual([]);
  });

  it('should add element to todos$', () => {
    expect(service.todos$.getValue()).toEqual([]);

    service.addTodo({
      text: 'hello world',
      priority: Priority.b,
    });

    expect(service.todos$.getValue().length).toEqual(1);

    expect(service.todos$.getValue()[0].text).toMatch('hello world');
  });

  it('should edit element', () => {

    expect(service.todos$.getValue()).toEqual([]);

    service.addTodo({
      text: 'hello world',
      priority: Priority.b,
    });

    let todo = service.todos$.getValue()[0];

    expect(todo.text).toEqual('hello world');

    const toChange = {...todo};

    toChange.text = 'world hello';

    service.editTodo(toChange);

    todo = service.todos$.getValue()[0];

    expect(todo.text).toEqual('world hello');

  });

  it('should remove element from array', () => {
    expect(service.todos$.getValue()).toEqual([]);

    service.addTodo({
      text: 'hello world',
      priority: Priority.b,
    });

    const todo = service.todos$.getValue()[0];

    expect(service.todos$.getValue().length).toEqual(1);

    service.deleteTodo(todo);

    expect(service.todos$.getValue()).toEqual([]);
  });
});
