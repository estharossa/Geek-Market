import { Component, OnInit } from '@angular/core';
import {Product, Product1} from '../interfaces/product';
import {ProductListService} from '../product-list.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: Product1;
  constructor(private service: ProductListService) { }

  ngOnInit(): void {
  }
  createProduct(name: string, description: string, image: any, price: number, categoryId: number) {
    const obj: Product1 = {
      name,
      description,
      image,
      price,
      category_id: categoryId
    };
    this.service.addProduct(obj).subscribe(p => this.product = p);
  }
  toNum(price: string): number {
    return +price;
  }
}
