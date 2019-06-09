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
    userName: ['', Validators.required],
    userEmail: ['', Validators.required],
    paymentType: ['', Validators.required]
  });
  orderRows: IOrderRow[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService,
              private fb: FormBuilder) { }

  ngOnInit() {
    // this.savedCart = JSON.parse(sessionStorage.getItem('cart'));
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
  createOrderRow(){
    for ( let i = 0; i < this.savedCart.length; i++) {
      this.orderRows.push(
        {ProductId: this.savedCart[i].product.id, Amount: this.savedCart[i].amount}
      );
    }
  }
  createOrder() {
    this.createOrderRow();
    console.log(this.userInformation.value);
    const orders = {
      id: 0,
      companyId: 4,
      created: moment().format('LLLL'),
      createdBy: this.userInformation.value.userEmail,
      paymentMethod: this.userInformation.value.paymentType,
      totalPrice: this.grandTotal(),
      status: 0,
      orderRows: this.orderRows
    };

    console.log(orders);
    this.dataService.createOrder(orders).subscribe(
      response => {console.log(response); },
      err => {console.log(err.message); },
      () => {console.log('completed'); }
    );
    sessionStorage.clear();
    // this.savedCart = JSON.parse(sessionStorage.getItem('cart'));
    this.goToConfirmation();
  }
  goToConfirmation() {
  location.href = '/confirmation';
  }
}
