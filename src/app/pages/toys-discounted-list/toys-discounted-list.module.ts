import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToysDiscountedListRoutingModule } from './toys-discounted-list-routing.module';
import { ToysDiscountedListComponent } from './toys-discounted-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ToysDiscountedListComponent
  ],
  imports: [
    CommonModule,
    ToysDiscountedListRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class ToysDiscountedListModule { }
