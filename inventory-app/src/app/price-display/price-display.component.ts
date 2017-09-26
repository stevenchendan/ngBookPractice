import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'price-display',
  templateUrl: './price-display.component.html',
})
export class PriceDisplayComponent implements OnInit {
  @Input()
  price: number;
  constructor() { }

  ngOnInit() {
  }

}
