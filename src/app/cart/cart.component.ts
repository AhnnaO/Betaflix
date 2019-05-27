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
  cart: ICartItem;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {

    // this.route.paramMap.subscribe(myParms => {
    // createOrder(finalOrder: ICartItem){
    //   JSON.parse(sessionStorage.getItem('details'));
    // }
    // });

  }
}
