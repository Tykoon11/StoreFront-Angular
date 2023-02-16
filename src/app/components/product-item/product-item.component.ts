import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {} as Product;
  finalPrice: number = '' as unknown as number;

  constructor(private addToCartService: ProductsService) {}

  addToCart(product: Product) {
    this.addToCartService.addToCart(product);
    this.finalPrice = product.amount
      ? product.price * product.amount
      : product.price;
    console.log(this.finalPrice);
    alert(
      product.amount
        ? `${product.amount} ${product.name}(s) added to cart`
        : ` 1 ${product.name} added to cart`
    );
  }

  ngOnInit(): void {}
}
