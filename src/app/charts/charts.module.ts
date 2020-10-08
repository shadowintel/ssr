import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnStackedComponent } from './column-stacked/column-stacked.component';
import { PieRansomwareComponent } from './pie-ransomware/pie-ransomware.component';
import { BubbleMapComponent } from './bubble-map/bubble-map.component';
import { RevenueTableComponent } from './revenue-table/revenue-table.component';
import { RevenueTableElementComponent } from './revenue-table-element/revenue-table-element.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ColumnStackedComponent, PieRansomwareComponent, BubbleMapComponent, RevenueTableComponent, RevenueTableElementComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ColumnStackedComponent,
    PieRansomwareComponent,
    BubbleMapComponent,
    RevenueTableComponent,
    RevenueTableElementComponent
  ]
})
export class ChartsModule { }
