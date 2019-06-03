import { Observable } from 'rxjs';
import { IProduct } from './IProduct';
import { ICategory } from './ICategory';
import { ICartItem } from './ICartItem';
import { IOrder } from './IOrder';

export interface IDataService {
    getData(): Observable<IProduct[]>;
    getCategory(): Observable<ICategory[]>;
    getSessionCartItems();
    removeSelection();
    addToCart(details: ICartItem[]);
    showOrder(): Observable<IOrder[]>;


}
