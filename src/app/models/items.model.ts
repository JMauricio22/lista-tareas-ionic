export class Items {
  description: string;
  done: boolean;

  constructor(description: string) {
    this.description = description;
    this.done = false;
  }
}
