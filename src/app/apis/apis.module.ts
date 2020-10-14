import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponent } from './guide/guide.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes = [
  {
    path: 'guide',
    component: GuideComponent
  }
]

@NgModule({
  declarations: [GuideComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgbDatepickerModule ,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    GuideComponent
  ]
})
export class ApisModule { }
