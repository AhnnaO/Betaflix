import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdministrationComponent } from './administration/administration.component';
import { MoviesComponent } from './movies/movies.component';
import { CartComponent } from './cart/cart.component';
import { from } from 'rxjs';
import { ConfirmationComponent } from './confirmation/confirmation.component';


const appRoutes = [
  {path: 'administration', component: AdministrationComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'cart', component: CartComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'movies/:id', component: MoviesComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategoriesComponent,
    DetailsComponent,
    HomeComponent,
    NotFoundComponent,
    AdministrationComponent,
    MoviesComponent,
    CartComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
