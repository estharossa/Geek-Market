import { Injectable } from '@angular/core';
import {categories} from './categories';
import {Observable, of} from 'rxjs';
import {Category} from './interfaces/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Product} from './interfaces/product';
import {LoginResponse} from './interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }
}
