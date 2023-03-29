import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogameDiscountedListRoutingModule } from './videogame-discounted-list-routing.module';
import { VideogameDiscountedListComponent } from './videogame-discounted-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    VideogameDiscountedListComponent
  ],
  imports: [
    CommonModule,
    VideogameDiscountedListRoutingModule,
    SharedModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class VideogameDiscountedListModule { }
