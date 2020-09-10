import { Priority } from './Priority.enum';

export interface TodoAttrs {
  id?: number;
  done?: boolean;
  text: string;
  priority: Priority;
}
