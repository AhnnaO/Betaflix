import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { ICartItem } from '../interfaces/ICartItem';
import { IProduct } from '../interfaces/IProduct';
import { MoviesComponent } from '../movies/movies.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  savedCart: ICartItem[] = [];
  totalPrice = 0;
  movie: IProduct[] =[];
  //  = { id: 0, name: '', price: 0, description: '', imageUrl: '', year: 0, added: '', productCategory: [] };

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.savedCart = JSON.parse(sessionStorage.getItem('cart'));
    this.grandTotal();
  }

  grandTotal() {
    this.totalPrice = 0;
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.savedCart.length; i++) {
      this.totalPrice += this.savedCart[i].selectionTotal;
    }
    return this.totalPrice;
  }

  removeSelectionFromCart() {
    this.dataService.getData().subscribe((selectedMovie) =>
    this.movie = selectedMovie);
    console.log(this.movie);
    
    for (let i = 0; i < this.savedCart.length; i++) {
      // if (this.savedCart[i].product.id === ) {
        this.savedCart.splice(i, 1);
    }
    sessionStorage.setItem('cart', JSON.stringify(this.savedCart));
  }
  
}
