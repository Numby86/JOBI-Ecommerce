import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogameDiscountedListComponent } from './videogame-discounted-list.component';

const routes: Routes = [{
  path: '',
  component: VideogameDiscountedListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideogameDiscountedListRoutingModule { }
