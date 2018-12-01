import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GenieComponent } from './genie/genie.component';
import { RulesService } from './rules/rules.service';
import { WishComponent } from './wish/wish.component';

@NgModule({
  imports: [CommonModule],
  exports: [GenieComponent, WishComponent],
  declarations: [GenieComponent, WishComponent],
  entryComponents: [WishComponent],
  providers: [RulesService]
})
export class GeneratorModule {}
