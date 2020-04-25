import { Injectable } from '@angular/core';
import {products} from './products';
import {Observable, of} from 'rxjs';
import {Category} from './interfaces/category';
import {Product} from './interfaces/product';
import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginResponse} from './interfaces/user';
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
  // product: Product[] =  products;
  private productsUrl = 'api/products';
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products/`);
  }
  getProduct(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products/${id}`);
  }
  getCategoryProducts2(category: number): Observable<Product[]> {
    console.log('service category get:', category);
    if (category === 1) {
      return this.http.get<Product[]>(`${this.BASE_URL}/api/products/`);
    } else {
      return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${category}/products`);
    }
  }
  sortByPriceAsc(array: Product[]): Observable<Product[]> {
    array.sort((a, b) => (a.price > b.price) ? 1 : -1);
    return of(array);
  }
  sortByPriceDesc(array: Product[]): Observable<Product[]> {
    array.sort((a, b) => (a.price < b.price) ? 1 : -1);
    return of(array);
  }
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

}
