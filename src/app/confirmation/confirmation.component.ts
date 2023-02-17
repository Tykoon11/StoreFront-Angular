import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { User } from '../models/user';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  constructor(private getUserService: ProductsService) {}
  user: User = {} as User;

  ngOnInit(): void {
    this.user = this.getUserService.getUser();
  }
}
