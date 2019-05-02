import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
