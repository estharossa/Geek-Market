import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CategoriesComponent } from './categories/categories.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { TestComponent } from './test/test.component';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import {SortByPipe} from './product-list.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {AuthInterceptor} from './auth.interceptor';
import { CreateComponent } from './create/create.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: CategoriesComponent},
      {path: 'category/:categoryId/products', component: CategoriesComponent},
      {path: 'products/:productId', component: ProductItemComponent},
      {path: 'about', component: AboutComponent},
      {path: 'create', component: CreateComponent},
      {path: 'cart', component: CartComponent},
      {path: 'products', component: ProductListComponent}
    ]),
    MatButtonModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    NavigationComponent,
    CategoriesComponent,
    ProductItemComponent,
    CartComponent,
    TestComponent,
    FooterComponent,
    AboutComponent,
    SortByPipe,
    CreateComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [TestComponent]
})
export class AppModule { }


