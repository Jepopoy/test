import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlphaModule } from './alpha/alpha.module';
import { BravoModule } from './bravo/bravo.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    AlphaModule
  ]
})
export class DynamicModule { }
