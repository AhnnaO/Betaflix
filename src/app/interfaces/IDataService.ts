import { Observable } from 'rxjs';
import { IProduct } from './IProduct';
import { ICategory } from './ICategory';

export interface IDataService {
    getData(): Observable<IProduct[]>;
    getCategory(): Observable<ICategory[]>;
}
