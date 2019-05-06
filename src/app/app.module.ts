import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoots = [
  {path: 'details/:id', component: DetailsComponent},
  {path: 'category/:id', component: CategoriesComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: HomeComponent},
  {path: '**', NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    CategoriesComponent,
    DetailsComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoots)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
