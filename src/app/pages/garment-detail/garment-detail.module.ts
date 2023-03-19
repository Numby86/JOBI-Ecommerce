import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarmentDetailRoutingModule } from './garment-detail-routing.module';
import { GarmentDetailComponent } from './garment-detail.component';


@NgModule({
  declarations: [
    GarmentDetailComponent
  ],
  imports: [
    CommonModule,
    GarmentDetailRoutingModule,
    RouterModule
  ]
})
export class GarmentDetailModule { }
