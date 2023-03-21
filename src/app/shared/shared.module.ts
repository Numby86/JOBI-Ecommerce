import { SpanComponent } from './../pages/home/component-span/span.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { SearchPipe } from './pipes/search/search.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ProductsComponent } from './components/products/products.component';
import { MainComponent } from './components/main/main.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';




@NgModule({
  declarations: [
    PaginationPipe,
    SearchPipe,
    SortPipe,
    FilterPipe,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    ProductsComponent,
    MainComponent,
    CartDetailComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ],
  exports: [
    CartComponent,
    CartDetailComponent,
    ProductListComponent,
    ProductDetailComponent,
    MainComponent,
    ProductsComponent
  ]
})
export class SharedModule { }
