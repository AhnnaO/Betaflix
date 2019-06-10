import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { ICategory } from '../interfaces/ICategory';

import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct';
// import { ICategoryIcon, ICategory, IProductCategory } from '../interfaces/ICategoryIcon';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  categories: ICategory[] = [];

  ngOnInit() {
    this.dataService.getCategory().subscribe((choice) => {
      this.categories = choice;
// tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].id === 5) {
          this.categories[i].logo = '../assets/images/Action logo.svg';
        }
        if (this.categories[i].id === 6) {
          this.categories[i].logo = '../assets/images/Thriller logo.svg';
        }
        if (this.categories[i].id === 7) {
          this.categories[i].logo = '../assets/images/Comedy logo.svg';
        }
        if (this.categories[i].id === 8) {
          this.categories[i].logo = '../assets/images/Sci-Fi logo.svg';
        }
      }
    });
  }

  redirectToMovies(categoryId: number) {
    // this.router.navigateByUrl();

    location.href = '/movies/' + categoryId;
  }

}
