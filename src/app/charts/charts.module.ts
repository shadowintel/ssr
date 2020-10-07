import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnStackedComponent } from './column-stacked/column-stacked.component';



@NgModule({
  declarations: [ColumnStackedComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ColumnStackedComponent
  ]
})
export class ChartsModule { }
