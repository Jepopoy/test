import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { RulesService } from './../rules/rules.service';
import { WishComponent } from '../wish/wish.component';

@Component({
  selector: 'app-genie',
  templateUrl: './genie.component.html',
  styleUrls: ['./genie.component.css'],
})
export class GenieComponent implements OnInit {
  componentRef: any;

  @ViewChild('host', { read: ViewContainerRef })
  entry: ViewContainerRef;

  constructor(
    private ruleService: RulesService
  ) {}

  ngOnInit() {
    this.componentRef = this.ruleService.createComponent(this.entry, WishComponent);
    if (this.componentRef) {
      this.componentRef.instance.wish = 'wish' + this.ruleService.maxWishes;
    }
  }
}
