import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnStackedComponent } from './column-stacked/column-stacked.component';
import { PieRansomwareComponent } from './pie-ransomware/pie-ransomware.component';



@NgModule({
  declarations: [ColumnStackedComponent, PieRansomwareComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ColumnStackedComponent,
    PieRansomwareComponent
  ]
})
export class ChartsModule { }
