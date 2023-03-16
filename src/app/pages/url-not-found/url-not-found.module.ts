import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlNotFoundRoutingModule } from './url-not-found-routing.module';
import { UrlNotFoundComponent } from './url-not-found.component';


@NgModule({
  declarations: [
    UrlNotFoundComponent
  ],
  imports: [
    CommonModule,
    UrlNotFoundRoutingModule
  ]
})
export class UrlNotFoundModule { }
