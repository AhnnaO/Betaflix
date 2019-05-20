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
  singleMovie = [];
  movies: IProduct[];
  ngOnInit() {
    this.singleMovie = [];

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
          for (let j = 0; j < movies[i].id; j++) {
          if (movies[j].id = movies[i].id) {
            this.singleMovie.push(movies[i]);
          }
          }
        }
      });
    }
  }
}
