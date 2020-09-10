import { Priority } from './todo/Priority.enum';
import { TodoAttrs } from './todo/todo.interface';

export class Todo implements TodoAttrs {
  static ID = 1;

  id: number;
  text: string;
  priority: Priority;
  done = false;

  constructor(attrs: TodoAttrs) {
    this.id = Todo.ID++;
    this.text = attrs.text;
    this.priority = attrs.priority;
  }

  toString(): string {
    return `${this.id} |_| ${this.done} |_| ${this.text} |_| ${this.priority}`;
  }
}
