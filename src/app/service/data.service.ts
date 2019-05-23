import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';
import { IDataService } from '../interfaces/IDataService';
import { ICategory } from '../interfaces/ICategory';
import { ICartItem } from '../interfaces/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  cart: ICartItem[] = [];

  constructor(private httpClient: HttpClient) { }
  // getOrder(): {('https://medieinstitutet-wie-products.azurewebsites.net/api/orders')};
  getData(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  getCategory(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
  }

  addToCart(details: ICartItem) {
    this.cart.push({ product: details.product, amount: details.amount});
    console.log(details.amount);
    console.log(details.product);
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
