import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToysDiscountedListComponent } from './toys-discounted-list.component';

const routes: Routes = [{
  path: '',
  component: ToysDiscountedListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToysDiscountedListRoutingModule { }
