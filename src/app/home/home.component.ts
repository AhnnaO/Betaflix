import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comedyLogo = '../assets/images/Comedy logo.svg';
  actionLogo = '../assets/images/Action logo.svg';
  thrillerLogo = '../assets/images/Thriller logo.svg';
  sciFiLogo = '../assets/images/Sci-Fi logo.svg';

  constructor() { }

  ngOnInit() {
  }

}
