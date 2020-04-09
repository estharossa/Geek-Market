import { Injectable } from '@angular/core';
import {categories} from './categories';
import {Observable, of} from 'rxjs';
import {Category} from './interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = categories;
  constructor() { }
  getCategory(): Observable<any[]> {
    return of(this.categories);
  }
}
