import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import {CartService} from '../cart.service';
import {ProductListService} from '../product-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product;

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductListService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('productId');
      this.product = this.getProduct(id);
    });
  }
  getProduct(id: number) {
    const a = this.productService.getProduct(id);
    a.subscribe(product => this.product = product );
  }
}
