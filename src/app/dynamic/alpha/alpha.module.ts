import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorseComponent } from './morse/morse.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MorseComponent
  ],
  exports: [
    MorseComponent
  ]
})
export class AlphaModule { }
