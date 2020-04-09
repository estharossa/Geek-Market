import { Injectable } from '@angular/core';
import {categories} from './categories';
import {Observable, of} from 'rxjs';
import {Category} from './interfaces/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Product} from './interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = categories;
  private categoriesUrl = 'api/categories';

  constructor(private http: HttpClient) { }
  getCategory(): Observable<Category[]> {
    return of(this.categories);
  }
}
