import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from './../../shared/shared.module';
import { RouterLink, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarmentListRoutingModule } from './garment-list-routing.module';
import { GarmentListComponent } from './garment-list.component';
import { GarmentComponent } from './components/garment/garment.component';

@NgModule({
  declarations: [
    GarmentListComponent,
    GarmentComponent,
    
  ],
  imports: [
    CommonModule,
    GarmentListRoutingModule,
    RouterModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports: [
    GarmentListComponent
  ]
})
export class GarmentListModule { }
