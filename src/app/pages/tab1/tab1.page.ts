import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    public taskService: TaskService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async addTask() {
    // this.router.navigateByUrl('/tabs/tab1/add');
    const alert = await this.alertController.create({
      header: 'New Task',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Task name',
        },
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Create',
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }
            const taskId = this.taskService.createTask(data.title);
            this.router.navigateByUrl(`/tabs/tab1/add/${taskId}`);
          },
        },
      ],
    });

    await alert.present();
  }
}
