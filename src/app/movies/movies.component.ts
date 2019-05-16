import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { IProduct } from '../interfaces/IProduct';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/ICategory';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  filteredMovies = [];
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  movies: IProduct[];
  productCategory: ICategory[];
  category: ICategory[];
  

  ngOnInit() {
    this.filteredMovies = [];

    this.route.params.subscribe(
      myParams => {
        const categoryId: number = +myParams['id'];

        if (categoryId > 0) {
          this.dataService.getCategory().subscribe((categoryArray) => {
            this.dataService.getData().subscribe((movies) => {
              console.log(categoryId);
// tslint:disable-next-line: prefer-for-of
              for (let i = 0; i < movies.length; i++) {
              // const categoryArray = movies[i].productCategory;
// tslint:disable-next-line: prefer-for-of
              for (let j = 0; j < categoryArray.length; j++) {
                  console.log(categoryArray[j].id);
                  if (categoryId === categoryArray[j].id) {
                    console.log(this.filteredMovies.push(movies[i]));
                    this.filteredMovies.push(movies[i]);
                } else {
                  console.log('no matched movies');
                }
                }
            }
          });
        });
      }

  // showMovies(categoryId: number) {

  // }

    });
  }
}
