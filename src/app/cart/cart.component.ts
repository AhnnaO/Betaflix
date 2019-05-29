import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { ICartItem } from '../interfaces/ICartItem';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    savedCart: ICartItem[] = [];
  totalPrice = 0;
  // { product: {id: 0, name: '', price: 0, description: '', imageUrl: '', year: 0, added: '', productCategory: [] }, amount: 0};
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.savedCart = JSON.parse(sessionStorage.getItem('cart'));
    this.grandTotal();
    console.log(this.savedCart);
  }

  grandTotal() {
    this.totalPrice = 0;
    for ()
  }
}
