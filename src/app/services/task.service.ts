import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasksList: Task[] = [];

  constructor() {
    this.getData();
  }

  getTask(id: string | number): Task {
    id = Number(id);
    return this.tasksList.find((task) => task.id === id);
  }

  createTask(title: string): number {
    const task = new Task(title);
    this.tasksList.push(task);
    this.saveData();
    return task.id;
  }

  saveData() {
    localStorage.setItem('tasks', JSON.stringify(this.tasksList));
  }

  removeTask({ id }) {
    this.tasksList = this.tasksList.filter((task) => task.id !== id);
    this.saveData();
  }

  getData() {
    const data = JSON.parse(localStorage.getItem('tasks'));
    if (data && data.length > 0) {
      this.tasksList = data;
    }
  }

  renameTask(task: Task, newTitle: string) {
    task.title = newTitle;
    this.saveData();
  }
}
