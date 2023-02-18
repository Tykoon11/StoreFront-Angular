import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private addToCartService: ProductsService) {}

  addToCart(product: Product) {
    this.addToCartService.addToCart(product);
    alert(
      product.amount
        ? `${product.amount} ${product.name}(s) added to cart`
        : ` 1 ${product.name} added to cart`
    );
  }

  ngOnInit(): void {
    this.addToCartService.getProducts().subscribe((res) => {
      this.products = res;
    });

    this.products.map((product: Product) => (product.amount = 1));
  }
}
