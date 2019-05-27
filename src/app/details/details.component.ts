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
  details: ICartItem;

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
  addToCart(amount: number): void {
    const details: ICartItem = {product: this.movie, amount};
    this.dataService.addToCart(details);
    // this.route.navigate(['/cart']);
  }
}
