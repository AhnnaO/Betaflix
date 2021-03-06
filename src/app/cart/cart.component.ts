import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { ICartItem } from '../interfaces/ICartItem';
import { IOrder, IOrderRow } from '../interfaces/IOrder';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  savedCart: ICartItem[] = [];
  totalPrice = 0;
  userInformation = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(2)]],
    userEmail: ['', Validators.required],
    paymentType: ['', Validators.required]
  });

  orders: IOrder;
  orderRows: IOrderRow[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.savedCartItems();
    this.grandTotal();
  }
  savedCartItems() {
    this.savedCart = this.dataService.getSessionCartItems();
  }

  grandTotal() {
    this.totalPrice = 0;
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.savedCart.length; i++) {
      this.totalPrice += this.savedCart[i].selectionTotal;
    }
    return this.totalPrice;
  }

  removeSelectionFromCart(id: number) {
    for (let i = 0; i < this.savedCart.length; i++) {
      if (this.savedCart[i].product.id === id) {
        this.savedCart.splice(i, 1);
      }
      sessionStorage.setItem('cart', JSON.stringify(this.savedCart));
      this.grandTotal();
    }
  }
  createOrderRow() 
  {
// tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < this.savedCart.length; i++) {
      this.orderRows.push(
        {ProductId: this.savedCart[i].product.id, Amount: this.savedCart[i].amount}
      );
    }
  }

  createOrder() {
    this.createOrderRow();
    this.orders = {
      id: 0,
      companyId: 4,
      created: moment().format('L'),
      createdBy: this.userInformation.value.userName,
      paymentMethod: this.userInformation.value.paymentType,
      totalPrice: this.grandTotal(),
      status: 0,
      orderRows: this.orderRows
    };

    this.dataService.createOrder(this.orders).subscribe(
      response => {
        this.orders = response;
        sessionStorage.clear();
        this.goToConfirmation();
      },
      err => {console.log(err.message); },
      () => {console.log('completed'); }
    );
  }

  goToConfirmation() {
    location.href = '/confirmation';
  }
}
