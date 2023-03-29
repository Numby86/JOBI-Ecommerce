import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDiscountedDetailComponent } from './book-discounted-detail.component';

const routes: Routes = [{
  path: '',
  component: BookDiscountedDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDiscountedDetailRoutingModule { }
