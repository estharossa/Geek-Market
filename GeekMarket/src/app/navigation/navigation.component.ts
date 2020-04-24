import { Component, OnInit } from '@angular/core';
import {Product} from '../interfaces/product';
import {ProductListService} from '../product-list.service';
import {ProductItemComponent} from '../product-item/product-item.component';
import {Observable} from 'rxjs';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  products: Product[];
  isFound: boolean;
  id;
  title = 'servicesGroup2';

  logged = false;

  username = '';
  password = '';
  constructor(private service: ProductListService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getProducts();
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
  getProducts() {
    const a = this.service.getAllProducts();
    a.subscribe(cat => this.products = cat );
  }
  onSubmit(text: string) {
      this.products.forEach(value => {
        if (value.name === text) {
          this.isFound = true;
          this.id = value.id;
          console.log(this.isFound);
          window.alert('Имя товара: ' + this.products[this.id - 1].name + '\n' + 'Цена: ' + this.products[this.id - 1].price);
        } else {
            this.isFound = false;
          }
      });
      console.log(text);
      if (this.isFound) {
      }
  }
  login(){
    this.categoryService.login(this.username, this.password)
      .subscribe(res => {

        localStorage.setItem('token', res.token);

        this.logged = true;

        this.username = '';
        this.password = '';
      })
  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }

}
