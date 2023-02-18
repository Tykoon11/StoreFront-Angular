import { Component, OnInit, Input } from '@angular/core';
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
  finalPrice: number = '' as unknown as number;

  submitForm() {
    const user = {
      fullName: this.fullName as string,
      address: this.address as string,
      creditCard: this.creditCard as number,
    };

    this.cart = [];
    this.addToCartService.clearCart();

    this.addToCartService.addUser(user);
    console.log(user);
    this.fullName = '' as string;
    this.address = '' as string;
    this.creditCard = '' as unknown as number;

    this.router.navigate(['/confirmation'], {
      relativeTo: this.activatedRoute,
    });
  }

  removeItem(product: Product) {
    this.cart = this.cart.filter((item) => item.id !== product.id);
    this.addToCartService.removeItem(product);
  }
  calculation() {
    return this.cart
      .map((product) => (product.amount ?? 1) * product.price)
      .reduce((a, b) => a + b);
  }
  addAmount(product: Product) {
    if ((product.amount as number) <= 1) {
      this.removeItem(product);
    }
  }

  ngOnInit(): void {
    this.cart = this.addToCartService.getCart();
  }
}
