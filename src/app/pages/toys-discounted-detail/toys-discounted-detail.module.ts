import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToysDiscountedDetailRoutingModule } from './toys-discounted-detail-routing.module';
import { ToysDiscountedDetailComponent } from './toys-discounted-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ToysDiscountedDetailComponent
  ],
  imports: [
    CommonModule,
    ToysDiscountedDetailRoutingModule,
    SharedModule
  ]
})
export class ToysDiscountedDetailModule { }
