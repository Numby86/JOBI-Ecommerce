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
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { SortComponent } from './components/sort/sort.component';




@NgModule({
  declarations: [
    PaginationPipe,
    SearchPipe,
    SortPipe,
    FilterPipe,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    CartDetailComponent,
    SortComponent
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
    SortPipe,
    SortComponent
  ]
})
export class SharedModule { }
