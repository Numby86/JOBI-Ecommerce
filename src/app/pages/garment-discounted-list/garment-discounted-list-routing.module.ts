import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarmentDiscountedListComponent } from './garment-discounted-list.component';

const routes: Routes = [{
  path: '',
  component: GarmentDiscountedListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarmentDiscountedListRoutingModule { }
