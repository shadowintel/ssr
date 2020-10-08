import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberSuffixPipe } from './number-suffix.pipe';



@NgModule({
  declarations: [NumberSuffixPipe],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports: [
    NumberSuffixPipe
  ]
})
export class PipesModule { }
