import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDiscountedListRoutingModule } from './book-discounted-list-routing.module';
import { BookDiscountedListComponent } from './book-discounted-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    BookDiscountedListComponent
  ],
  imports: [
    CommonModule,
    BookDiscountedListRoutingModule,
    RouterModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class BookDiscountedListModule { }
