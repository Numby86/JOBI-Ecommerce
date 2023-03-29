import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarmentDiscountedListRoutingModule } from './garment-discounted-list-routing.module';
import { GarmentDiscountedListComponent } from './garment-discounted-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    GarmentDiscountedListComponent
  ],
  imports: [
    CommonModule,
    GarmentDiscountedListRoutingModule,
    RouterModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class GarmentDiscountedListModule { }
