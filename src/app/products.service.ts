import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { User } from './models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  products: Product[] = [];
  cart: Product[] = [];
  user: User = {} as User;
  // amount: number = '' as unknown as number;

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../assets/data.json');
  }

  clearCart() {
    this.cart = [];
  }
  removeItem(product: Product) {
    this.cart = this.cart.filter((item) => item.id !== product.id);
    alert('Item is removed from cart');
  }

  addToCart(product: Product) {
    const cart = this.cart.filter(
      (productItem) => productItem.id === product.id
    );
    if (cart.length > 0) {
    } else {
      this.cart.push(product);
    }
  }
  getCart() {
    return this.cart;
  }
  addUser(user: User) {
    this.user = user;
    console.log(`first ${this.user}`);
  }
  getUser() {
    return this.user;
  }
}
