import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListModule } from './pages/book-list/book-list.module';
import { ToysListModule } from './pages/toys-list/toys-list.module';
import { ToysDetailModule } from './pages/toys-detail/toys-detail.module';

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
    path:'toys-list',
    loadChildren: () => import('./pages/toys-list/toys-list.module').then(m=> m.ToysListModule)
  },
  {
    path:'toysDetail/:id',
    loadChildren: () => import('./pages/toys-detail/toys-detail.module').then(m=> m.ToysDetailModule)
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
