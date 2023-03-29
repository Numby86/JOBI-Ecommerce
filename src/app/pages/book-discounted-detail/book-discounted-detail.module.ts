import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDiscountedDetailRoutingModule } from './book-discounted-detail-routing.module';
import { BookDiscountedDetailComponent } from './book-discounted-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookDiscountedDetailComponent
  ],
  imports: [
    CommonModule,
    BookDiscountedDetailRoutingModule,
    SharedModule
  ]
})
export class BookDiscountedDetailModule { }
