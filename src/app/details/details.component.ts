import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { IProduct } from '../interfaces/IProduct';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  movie: IProduct;

  ngOnInit() {

    this.route.params.subscribe(myParams => {
      const id: number = +myParams.id;

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
}
