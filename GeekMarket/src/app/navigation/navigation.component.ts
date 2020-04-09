import { Component, OnInit } from '@angular/core';
import {Product} from '../interfaces/product';
import {ProductListService} from '../product-list.service';
import {ProductItemComponent} from '../product-item/product-item.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  products: Product[];
  isFound: boolean;
  id;
  constructor(private service: ProductListService) {
  }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    const a = this.service.getProduct();
    a.subscribe(cat => this.products = cat );
  }
  onSubmit(text: string) {
      this.products.forEach(value => {
        if (value.name === text) {
          this.isFound = true;
          this.id = value.id;
          console.log(this.isFound);
          window.alert('Имя товара: ' + this.products[this.id - 1].name + '\n' + 'Цена: ' + this.products[this.id].price);
        } else {
            this.isFound = false;
          }
      });
      console.log(text);
      if (this.isFound) {
      }
  }
}
