import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ProductListService} from '../product-list.service';
import {Category} from '../interfaces/category';
import {Subject} from 'rxjs';
import {CategoryService} from '../category.service';
import {Product} from '../interfaces/product';
import {categories} from '../categories';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<undefined>();
  products: Product[];
  category: Category;
  categories;
  params: number;
  constructor(
    private route: ActivatedRoute,
    private service: ProductListService,
    private categoryService: CategoryService
  ) {
    this.getCategories();
    this.route.paramMap.subscribe(params => {
      this.params = +params.get('categoryId');
      this.params = this.params + 1;
      console.log(this.params);
      this.category = categories[+params.get('categoryId')];
      console.log('category:', this.category);
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.getCategoryProducts2(this.params);
  }
  getCategoryProducts2(category: number) {
    const a = this.service.getCategoryProducts2(category);
    a.subscribe(cat => this.products = cat );
  }
  getCategories() {
    const a = this.categoryService.getCategory();
    a.subscribe(cat => this.categories = cat );
  }
  sortByPriceAsc() {
    const a = this.service.sortByPriceAsc(this.products);
    a.subscribe(cat => this.products = cat );
  }
  sortByPriceDesc() {
    const a = this.service.sortByPriceDesc(this.products);
    a.subscribe(cat => this.products = cat );
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
