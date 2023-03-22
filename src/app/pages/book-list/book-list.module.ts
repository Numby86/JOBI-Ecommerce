import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookListRoutingModule,
    RouterModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports: [
    BookListComponent
  ]
})
export class BookListModule { }
