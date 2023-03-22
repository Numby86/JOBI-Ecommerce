import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VideogameListRoutingModule } from './videogame-list-routing.module';
import { VideogameListComponent } from './videogame-list.component';


@NgModule({
  declarations: [
    VideogameListComponent
  ],
  imports: [
    CommonModule,
    VideogameListRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class VideogameListModule { }
