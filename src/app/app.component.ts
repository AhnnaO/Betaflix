import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Betaflix';
  tagLine = 'Ultimate retro movie experience';
  betaFlixImage = './assets/images/betamax-photo-of-logo.jpg';
  slogan = 'You think you’re retro, but do you even Betamax? ';
  // 'You think you’re hipster, but do you have a postal film delivery service? ';
  // 'Join the old school beta movement... ';
  // 'so uncool, it’s cool. ';
  // 'You know what we mean.';
}
