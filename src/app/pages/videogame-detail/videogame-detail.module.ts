import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogameDetailRoutingModule } from './videogame-detail-routing.module';
import { VideogameDetailComponent } from './videogame-detail.component';


@NgModule({
  declarations: [
    VideogameDetailComponent
  ],
  imports: [
    CommonModule,
    VideogameDetailRoutingModule
  ]
})
export class VideogameDetailModule { }
