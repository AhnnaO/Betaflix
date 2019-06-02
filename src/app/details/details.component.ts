import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { IProduct } from '../interfaces/IProduct';
import { ICartItem } from '../interfaces/ICartItem';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  movie: IProduct = { id: 0, name: '', price: 0, description: '', imageUrl: '', year: 0, added: '', productCategory: [] };
  details: ICartItem[] = [];

  ngOnInit() {

    this.route.paramMap.subscribe(myParams => {
      const id: number = +myParams.get('id');
      this.findMovieById(id);
    });
  }


  findMovieById(id: number) {

    if (id > 0) {
      this.dataService.getData().subscribe((movies) => {
// tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < movies.length; i++) {
          if (movies[i].id === id) {
            this.movie = movies[i];
          }
        }
      });
    }
  }

  addToCart(amount: number) {
    const selectionTotal = 0;
    const newItems: ICartItem = {product: this.movie, amount, selectionTotal};
    this.details = this.dataService.getSessionCartItems();
    let foundMovie = false;

// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.details.length; i++) {

      if (newItems.product.id === this.details[i].product.id) {
        this.details[i].amount += newItems.amount;
        this.details[i].selectionTotal = this.details[i].product.price * this.details[i].amount;
        this.dataService.addToCart(this.details);
        foundMovie = true;
      }
    }

    if (!foundMovie) {
      // selectionTotal = newItems.product.price * newItems.amount;
      this.details.push({ product: newItems.product, amount: newItems.amount, selectionTotal: newItems.product.price * newItems.amount});
      this.dataService.addToCart(this.details);
    }
  }

  goToCart() {
  location.href = '/cart';
  console.log('should go to cart');
  }

}
