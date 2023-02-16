import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  products: Product[] = [];
  product: Product | undefined = {} as Product;
  finalPrice: number = '' as unknown as number;

  addToCart(product: Product) {
    this.productsService.addToCart(product);
    this.finalPrice = product.amount
      ? product.price * product.amount
      : product.price;
    console.log(this.finalPrice);
    alert(
      product.amount
        ? `${product.amount} ${product.name}s added to cart`
        : `${product.name} added to cart`
    );
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.product = this.products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
