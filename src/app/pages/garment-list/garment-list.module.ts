import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarmentListRoutingModule } from './garment-list-routing.module';
import { GarmentListComponent } from './garment-list.component';


@NgModule({
  declarations: [
    GarmentListComponent
  ],
  imports: [
    CommonModule,
    GarmentListRoutingModule
  ]
})
export class GarmentListModule { }
