import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';
import { IDataService } from '../interfaces/IDataService';
import { ICategory } from '../interfaces/ICategory';
import { ICartItem } from '../interfaces/ICartItem';
// import { ICategoryIcon } from '../interfaces/ICategoryIcon';
import { CartComponent } from '../cart/cart.component';
import { IOrder } from '../interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  cart: ICartItem[] = [];
  Url = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
  categoryUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/categories';
  orderUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders';
  getOrderUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=4';

  constructor(private httpClient: HttpClient) { }

  createOrder(finalOrder: IOrder): Observable<IOrder> {
    return this.httpClient.post<IOrder>(this.orderUrl, finalOrder);
  }

  showOrder(): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>(this.getOrderUrl);
  }

  // deleteOrder(): Observable<IOrder[]> {
  //   return this.httpClient.delete<IOrder[]>(this.orderUrl) + id;
  // }

  getData(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.Url);
  }

  getCategory(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.categoryUrl);
  }

  addToCart(details: ICartItem[]) {
    return sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getSessionCartItems() {
    return this.cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  }

  removeSelection(): void {
    sessionStorage.removeItem('cart');
    }
}



  // adminOrder get instead of post and remember at end https:/orders to add /?companyId=4
  // deleteOrder delete instead of post and add "+ id" for order id at end of https:/orders/
  // Observable<IOrder[]> { return this.httpClient.delete<IOrder[]>('https:....')}

