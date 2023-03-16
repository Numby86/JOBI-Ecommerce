import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';


@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookListRoutingModule
  ]
})
export class BookListModule { }
