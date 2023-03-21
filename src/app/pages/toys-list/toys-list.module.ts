import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToysListRoutingModule } from './toys-list-routing.module';
import { ToysListComponent } from './toys-list.component';
//import { ToyComponent } from './components/toy/toy.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ToysListComponent,
    //ToyComponent
  ],
  imports: [
    CommonModule,
    ToysListRoutingModule,
    RouterModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports: [
    ToysListComponent
  ]
})
export class ToysListModule { }
