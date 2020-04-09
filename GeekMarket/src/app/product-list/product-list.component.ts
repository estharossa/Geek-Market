import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ProductListService} from '../product-list.service';
import {Category} from '../interfaces/category';
import {Subject} from 'rxjs';
import {CategoryService} from '../category.service';
import {Product} from '../interfaces/product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<undefined>();
  products: Product[];
  category: Category;
  categories: Category[];
  params;
  constructor(
    private route: ActivatedRoute,
    private service: ProductListService,
    private categoryService: CategoryService
  ) {
    this.getCategories()
    this.route.paramMap.subscribe(params => {
      this.params = params.get('categoryId')
      this.category = this.categories[+params.get('categoryId')];
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.getCategoryProducts(this.category);
  }
  getProduct() {
    const a = this.service.getProduct();
    a.subscribe(cat => this.products = cat );
  }
  getCategoryProducts(category: Category) {
    const a = this.service.getCategoryProducts(category);
    a.subscribe(cat => this.products = cat );
  }
  getCategories() {
    const a = this.categoryService.getCategory();
    a.subscribe(cat => this.categories = cat );
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
