import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RansomewareSubscribeComponent } from './ransomeware-subscribe/ransomeware-subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [RansomewareSubscribeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
  ],
  exports: [
    RansomewareSubscribeComponent
  ]
})
export class ComponentsModule { }
