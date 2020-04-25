import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../interfaces/category';
import {ProductListService} from '../product-list.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories;
  selectedCategory: Category;

  logged = false;
  username = '';
  password = '';
  constructor(private service: CategoryService, private productService: ProductListService) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.getCategories();
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
  getCategories() {
    const a = this.service.getCategory();
    a.subscribe(cat => this.categories = cat );
  }
  onSelect(category: Category) {
    this.selectedCategory = category;
  }
  login() {
    this.productService.login(this.username, this.password)
      .subscribe(res => {

        localStorage.setItem('token', res.token);

        this.logged = true;

        this.username = '';
        this.password = '';
      });
  }

  logout() {
    localStorage.clear();
    this.logged = false;
  }


}
