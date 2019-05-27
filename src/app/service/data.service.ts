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

  createOrder(finalOrder: ICartItem): Observable<ICartItem[]> {
    return this.httpClient.post<ICartItem[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', finalOrder);
  }

  getData(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  getCategory(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
  }

  addToCart(details: ICartItem) {
    this.cart.push({ product: details.product, amount: details.amount});
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }



  // adminOrder get instead of post and remember at end https:/orders to add /?companyId=4
  // deleteOrder delete instead of post and add "+ id" for order id at end of https:/orders/

}
