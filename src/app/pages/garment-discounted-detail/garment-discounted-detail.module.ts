import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarmentDiscountedDetailRoutingModule } from './garment-discounted-detail-routing.module';
import { GarmentDiscountedDetailComponent } from './garment-discounted-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GarmentDiscountedDetailComponent
  ],
  imports: [
    CommonModule,
    GarmentDiscountedDetailRoutingModule,
    SharedModule
  ]
})
export class GarmentDiscountedDetailModule { }
