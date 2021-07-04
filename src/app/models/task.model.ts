import { Items } from './items.model';

export class Task {
  id: number;
  title: string;
  createdAt: Date;
  finishedAt: Date;
  done: boolean;
  items: Items[];

  constructor(title: string) {
    this.id = new Date().getTime();
    this.title = title;
    this.createdAt = new Date();
    this.done = false;
    this.items = [];
  }
}
