import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  @Input() pending = true;
  @ViewChild(IonList) tasksList: IonList;

  constructor(
    public taskService: TaskService,
    private router: Router,
    private alertController: AlertController
  ) {}

  goToTask(task: Task) {
    if (this.pending) {
      this.router.navigateByUrl(`/tabs/tab1/add/${task.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab2/add/${task.id}`);
    }
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task);
  }

  async editTaskName(task: Task) {
    const alert = await this.alertController.create({
      header: 'Rename Task',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.tasksList.closeSlidingItems();
          },
        },
        {
          text: 'Confirm',
          role: 'confirm',
          handler: (data) => {
            this.taskService.renameTask(task, data.title);
            this.tasksList.closeSlidingItems();
          },
        },
      ],
      inputs: [{ name: 'title', type: 'text', value: task.title }],
    });

    await alert.present();
  }
}
