import { Injectable } from '@angular/core';
import {products} from './products';
import {Observable, of} from 'rxjs';
import {Category} from './interfaces/category';
import {Product} from './interfaces/product';
import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
@Pipe({ name: 'sortBy' })

export class SortByPipe implements PipeTransform {

  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    if (!column || column === '') {
      if (order === 'asc') {return value.sort(); } else {return value.sort().reverse(); }
    } // sort 1d array
    return orderBy(value, [column], [order]);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  product: Product[] =  products;

  constructor() { }
  getProduct(): Observable<any[]> {
    return of(this.product);
  }
  getCategoryProducts(category: Category): Observable<Product[]> {
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
  sortByPriceAsc(array: Product[]): Observable<Product[]> {
    array.sort((a, b) => (a.price > b.price) ? 1 : -1);
    return of(array);
  }
  sortByPriceDesc(array: Product[]): Observable<Product[]> {
    array.sort((a, b) => (a.price < b.price) ? 1 : -1);
    return of(array);
  }

}
