import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarmentDetailComponent } from './garment-detail.component';

const routes: Routes = [{
  path: '',
  component: GarmentDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarmentDetailRoutingModule { }
