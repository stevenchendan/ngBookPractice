import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productList: Product[];

  @Output() onProductSelected: EventEmitter<Product>;
  constructor() { }

  ngOnInit() {
  }

}
