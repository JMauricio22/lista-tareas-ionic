import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { Items } from '../../models/items.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {
  task: Task;
  itemName = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService
  ) {
    const taskId = this.activatedRoute.snapshot.paramMap.get('taskId');
    this.task = this.taskService.getTask(taskId);
  }

  addItemToTask() {
    if (this.itemName.length === 0) {
      return;
    }
    this.task.items.push(new Items(this.itemName));
    this.taskService.saveData();
    this.itemName = '';
  }

  changeCheck(item: Items) {
    const pending = this.task.items.filter((element) => !element.done);
    if (pending.length === 0) {
      this.task.done = true;
      this.task.finishedAt = new Date();
    } else {
      this.task.done = false;
      this.task.finishedAt = null;
    }
    this.taskService.saveData();
  }

  removeItem(index: number) {
    this.task.items.splice(index, 1);
    this.taskService.saveData();
  }
}
