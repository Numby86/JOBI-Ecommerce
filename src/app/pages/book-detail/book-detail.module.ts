import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailRoutingModule } from './book-detail-routing.module';
import { BookDetailComponent } from './book-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BookDetailRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class BookDetailModule { }
