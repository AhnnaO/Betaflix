import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { IProduct } from '../interfaces/IProduct';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/ICategory';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  filteredMovies = [];
  movies: IProduct[];
  category: ICategory[];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.filteredMovies = [];

    this.route.params.subscribe(myParams => {
      const categoryId: number = +myParams.id;
      // const id: number = +myParams.movies.id;
      this.findProductsByCategory(categoryId);
    });

  }

  redirectToDetails(id: number) {
    location.href = '/details/' + id;
    console.log(id);
  }

  findProductsByCategory(categoryId: number) {

    if (categoryId > 0) {
      this.dataService.getData().subscribe((movies) => {
// tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < movies.length; i++) {

// tslint:disable-next-line: prefer-for-of
          for (let j = 0; j < movies[i].productCategory.length; j++) {

            if (categoryId === movies[i].productCategory[j].categoryId) {
              this.filteredMovies.push(movies[i]);

            } else {

            }
          }
        }
      });
    }
  }
}
