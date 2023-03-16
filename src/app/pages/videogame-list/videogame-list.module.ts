import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogameListRoutingModule } from './videogame-list-routing.module';
import { VideogameListComponent } from './videogame-list.component';


@NgModule({
  declarations: [
    VideogameListComponent
  ],
  imports: [
    CommonModule,
    VideogameListRoutingModule
  ]
})
export class VideogameListModule { }
