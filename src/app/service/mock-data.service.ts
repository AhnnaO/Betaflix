import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';
import { IDataService } from '../interfaces/IDataService';
import { ICategory } from '../interfaces/ICategory';
import { ICartItem } from '../interfaces/ICartItem';
import { IOrder } from '../interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {
  productCategory: ICategory[] = [
    {id: 5,
    name: 'Action',
    logo: '../assets/images/Action logo.svg'},

    {id: 6,
    name: 'Thriller',
    logo: '../assets/images/Thriller logo.svg'},
    {id: 7,
    name: 'Comedy',
    logo: '../assets/images/Comedy logo.svg'},
    {id: 8,
    name: 'Sci-fi',
    logo: '../assets/images/Sci-Fi logo.svg'}];

  products: IProduct[] = [
    {id: 76,
    name: 'The Dark Knight',
  // tslint:disable-next-line: max-line-length
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice',
    price: 199,
  // tslint:disable-next-line: max-line-length
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    year: 2008,
    added: '2016-01-05T00:00:00',
    productCategory: [{categoryId: 5, category: ''}, {categoryId: 6, category: ''}]},

    {id: 77,
    name: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanit"s survival.',
    price: 129,
  // tslint:disable-next-line: max-line-length
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg',
    year: 2014,
    added: '2017-07-16T00:00:00',
    productCategory: [{categoryId: 8, category: ''}]}
    ];

    cart: ICartItem[] = [
      {product: {id: 76,
        name: 'The Dark Knight',
      // tslint:disable-next-line: max-line-length
        description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice',
        price: 199,
      // tslint:disable-next-line: max-line-length
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        year: 2008,
        added: '2016-01-05T00:00:00',
        productCategory: [{categoryId: 5, category: ''}, {categoryId: 6, category: ''}],
      },
      amount: 2,
      selectionTotal: 298}
    ];

    orders: IOrder =
      {id: 67890,
      companyId: 4,
      created: '2019-06-02T14:39:00',
      createdBy: 'Ahnna',
      paymentMethod: 'credit card',
      totalPrice: 298,
      status: 0,
      orderRows: [{ProductId: 76, Amount: 2}]
      };

  getData(): Observable<IProduct[]> {
      return of(this.products);
    }

  getCategory(): Observable<ICategory[]> {
    return of(this.productCategory);
  }

  addToCart(details: ICartItem[]) {
    return this.cart;
  }

  getSessionCartItems() {
    return this.cart;
  }

  createOrder(): Observable<IOrder> {
    return of(this.orders);
  }

  removeSelection() {

  }

  showOrder(): Observable<IOrder[]> {
    return of([this.orders]);
  }

  constructor() { }
}
