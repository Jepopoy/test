import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  @Input()
  wish: string;

  constructor() { }

  ngOnInit() {
  }

}
