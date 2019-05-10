import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';
import { IDataService } from '../interfaces/IDataService';
import { ICategory } from '../interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  constructor(private httpClient: HttpClient) { }
  getData(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  getCategory(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
  }
}
