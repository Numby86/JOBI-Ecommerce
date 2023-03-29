import { AllProductsComponent } from './all-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsRoutingModule } from './all-products-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AllProductsComponent
  ],

  imports: [
    CommonModule,
    AllProductsRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    AllProductsComponent
  ]
})
export class AllProductsModule { }
