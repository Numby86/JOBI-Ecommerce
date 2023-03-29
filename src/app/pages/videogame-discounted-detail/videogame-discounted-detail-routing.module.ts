import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogameDiscountedDetailComponent } from './videogame-discounted-detail.component';

const routes: Routes = [{
  path: '',
  component: VideogameDiscountedDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideogameDiscountedDetailRoutingModule { }
