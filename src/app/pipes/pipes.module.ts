import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksFilterPipe } from './tasks-filter.pipe';

@NgModule({
  declarations: [TasksFilterPipe],
  exports: [TasksFilterPipe],
  imports: [],
})
export class PipesModule {}
