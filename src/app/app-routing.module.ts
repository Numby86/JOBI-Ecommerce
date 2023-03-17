import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListModule } from './pages/book-list/book-list.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m=> m.HomeModule)
  },
  {
    path: 'book-list',
    loadChildren: () => import('./pages/book-list/book-list.module').then(m => m.BookListModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/book-detail/book-detail.module').then(m=> m.BookDetailModule)
  },
  {
    path: '*',
    loadChildren: () => import('./pages/home/home.module').then(m=> m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
