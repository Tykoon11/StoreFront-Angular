import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {} as Product;
  @Output() productEmitter = new EventEmitter<Product>();

  constructor(private addToCartService: ProductsService) {}

  addToCart(product: Product) {
    this.productEmitter.emit(this.product);
    this.addToCartService.addToCart(product);
    alert(
      product.amount
        ? `${product.amount} ${product.name}(s) added to cart`
        : ` 1 ${product.name} added to cart`
    );
  }

  ngOnInit(): void {}
}
