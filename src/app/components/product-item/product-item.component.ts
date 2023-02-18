import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {} as Product;
  @Output() productEmitter = new EventEmitter<Product>();

  constructor() {}

  addToCart(product: Product) {
    this.productEmitter.emit(this.product);
  }

  ngOnInit(): void {
    this.product ? (this.product.amount = 1) : this.product;
  }
}
