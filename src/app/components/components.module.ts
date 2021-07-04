import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [TasksComponent],
})
export class ComponentsModule {}
