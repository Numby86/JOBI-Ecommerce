import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarmentDiscountedDetailComponent } from './garment-discounted-detail.component';

const routes: Routes = [{
  path: '',
  component: GarmentDiscountedDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarmentDiscountedDetailRoutingModule { }
