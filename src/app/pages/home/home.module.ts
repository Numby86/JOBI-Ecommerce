

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './component-category/category.component';
import { SaleComponent } from './component-sale/sale.component';
import { NovedadesComponent } from './component-novedades/novedades.component';
import { BestSellerComponent } from './component-best-seller/best-seller.component';





@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    SaleComponent,
    NovedadesComponent,
    BestSellerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
