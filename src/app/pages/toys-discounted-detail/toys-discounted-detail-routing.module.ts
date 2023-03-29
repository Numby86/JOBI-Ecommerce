import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToysDiscountedDetailComponent } from './toys-discounted-detail.component';

const routes: Routes = [{
  path: '',
  component: ToysDiscountedDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToysDiscountedDetailRoutingModule { }
