import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RansomewareSubscribeComponent } from './ransomeware-subscribe/ransomeware-subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [RansomewareSubscribeComponent, ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
  ],
  exports: [
    RansomewareSubscribeComponent,
    ContactComponent
  ]
})
export class ComponentsModule { }
