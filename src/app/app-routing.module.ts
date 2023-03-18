import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'videogames',
    loadChildren: () => import('./pages/videogame-list/videogame-list.module').then(m => m.VideogameListModule)
  },
  {
    path: 'videogames/:id',
    loadChildren: () => import('./pages/videogame-detail/videogame-detail.module').then(m => m.VideogameDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
