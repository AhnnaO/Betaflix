import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(myParams => {myParams['id'];
    });
   }

  ngOnInit() {
  }

}
