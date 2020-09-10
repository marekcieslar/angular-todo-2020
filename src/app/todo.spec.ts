import { Todo } from './todo';
import { Priority } from './todo/Priority.enum';

describe('Todo', () => {
  let todo: Todo;

  beforeEach(() => {
    todo = new Todo({
      priority: Priority.a,
      text: 'Hello world!',
    });
  });

  it('should create an instance', () => {
    expect(todo).toBeTruthy();
  });

  it('should create new todo with id greater than 1', () => {
    const todo2 = new Todo({
      priority: Priority.b,
      text: 'todo 2',
    });

    expect(todo2.id).toBeGreaterThan(1);
  });

  it('should return good string', () => {
    expect(todo.toString()).toEqual(
      `${todo.id} |_| ${todo.done} |_| ${todo.text} |_| ${todo.priority}`
    );
  });

});
