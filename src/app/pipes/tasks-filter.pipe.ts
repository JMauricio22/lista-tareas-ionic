import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'tasksFilter',
  pure: false,
})
export class TasksFilterPipe implements PipeTransform {
  transform(tasks: Task[], done: boolean = true): Task[] {
    return tasks.filter((task) => task.done === done);
  }
}
