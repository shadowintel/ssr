import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

const routes = [
  {
    path: '',
    component: ScheduleComponent
  }
]

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipesModule
  ]
})
export class ScheduleModule { }
