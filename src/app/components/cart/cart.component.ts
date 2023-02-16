import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private addToCartService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  fullName: string = '';
  address: string = '';
  creditCard: number = '' as unknown as number;
  cart: Product[] = [];
  product: Product = {} as Product;

  submitForm() {
    const user = {
      fullName: this.fullName as string,
      address: this.address as string,
      creditCard: this.creditCard as number,
    };

    this.addToCartService.addUser(user);

    this.fullName = '' as string;
    this.address = '' as string;
    this.creditCard = '' as unknown as number;

    this.router.navigate(['/confirmation'], {
      relativeTo: this.activatedRoute,
    });
  }

  ngOnInit(): void {
    if (this.product.id) {
      this.cart = this.addToCartService.addToCart(this.product);
    }else{
      this.cart = []
    }
  }
}
