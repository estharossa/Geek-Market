import { Injectable } from '@angular/core';
import {products} from './products';
import {Observable, of} from 'rxjs';
import {Category} from './interfaces/category';
import {Product} from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  product: Product[] =  products;

  constructor() { }
  getProduct(): Observable<any[]> {
    return of(this.product);
  }
  getCategoryProducts(category: Category): Observable<any[]> {
    if (category.id === 1) {
      return of(this.product);
    }
    const categoryProducts = [];
    this.product.forEach(value => {
      if (value.category === category.name) {
        categoryProducts.push(value);
      }
    });
    return of(categoryProducts);
  }

}
