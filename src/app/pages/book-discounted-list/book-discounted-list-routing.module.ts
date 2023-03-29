import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDiscountedListComponent } from './book-discounted-list.component';

const routes: Routes = [{
  path: '',
  component: BookDiscountedListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDiscountedListRoutingModule { }
