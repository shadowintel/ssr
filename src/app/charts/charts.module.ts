import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnStackedComponent } from './column-stacked/column-stacked.component';
import { PieRansomwareComponent } from './pie-ransomware/pie-ransomware.component';
import { BubbleMapComponent } from './bubble-map/bubble-map.component';



@NgModule({
  declarations: [ColumnStackedComponent, PieRansomwareComponent, BubbleMapComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ColumnStackedComponent,
    PieRansomwareComponent,
    BubbleMapComponent
  ]
})
export class ChartsModule { }
