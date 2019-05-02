import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  homeLogo = '../assets/images/Home logo.svg';
  shoppingCartLogo = '../assets/images/Shopping cart logo.svg';
  constructor() { }

  ngOnInit() {
  }

}
