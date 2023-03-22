import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { VideogameDetailRoutingModule } from './videogame-detail-routing.module';
import { VideogameDetailComponent } from './videogame-detail.component';


@NgModule({
  declarations: [
    VideogameDetailComponent
  ],
  imports: [
    CommonModule,
    VideogameDetailRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class VideogameDetailModule { }
