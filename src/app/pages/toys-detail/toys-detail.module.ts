import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToysDetailRoutingModule } from './toys-detail-routing.module';
import { ToysDetailComponent } from './toys-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ToysDetailComponent
  ],
  imports: [
    CommonModule,
    ToysDetailRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ToysDetailModule { }
