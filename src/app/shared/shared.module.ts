import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { SearchPipe } from './pipes/search/search.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';



@NgModule({
  declarations: [
    PaginationPipe,
    SearchPipe,
    SortPipe,
    FilterPipe,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
