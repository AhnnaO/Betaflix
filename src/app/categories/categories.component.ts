import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { ICategory } from '../interfaces/ICategory';

import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  comedy = 'Comedy';
  comedyLogo = '../assets/images/Comedy logo.svg';
  action = 'Action';
  actionLogo = '../assets/images/Action logo.svg';
  thriller = 'Thriller';
  thrillerLogo = '../assets/images/Thriller logo.svg';
  sciFi = 'Sci-Fi';
  sciFiLogo = '../assets/images/Sci-Fi logo.svg';
  slogan = 'You think you’re retro, but do you even Betamax? ' +
            'You think you’re hipster, but do you have a postal film delivery service? ' +
            'Join the old school beta movement... ' +
            'so uncool, it’s cool. ' +
            'You know what we mean.';

   constructor(private dataService: DataService, private router: Router) {}
    categories: ICategory[];

  ngOnInit() {
    this.dataService.getCategory().subscribe((choice) => {
      this.categories = choice;
    });

  }
  redirectToMovies(categoryId: number) {
    // this.router.navigateByUrl();

    location.href = '/movies/' + categoryId;
  }

}
