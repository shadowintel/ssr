import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ChartsModule } from '../charts/charts.module';
import { LottieModule } from 'ngx-lottie';
import {ComponentsModule} from '../components/components.module';

export function playerFactory() {
  return import('lottie-web');
}
const routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule,
    LottieModule.forRoot({ player: playerFactory }),
    ComponentsModule
  ]
})
export class HomeModule { }
