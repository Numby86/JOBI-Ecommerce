import { CartDetailComponent } from './shared/components/cart-detail/cart-detail.component';
import { MainComponent } from './shared/components/main/main.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    path: 'videogames',
    loadChildren: () => import('./pages/videogame-list/videogame-list.module').then(m => m.VideogameListModule)
  },
  {
    path: 'videogames/:id',
    loadChildren: () => import('./pages/videogame-detail/videogame-detail.module').then(m => m.VideogameDetailModule)
   },
   {
    path: 'garment-list',
    loadChildren: () => import('./pages/garment-list/garment-list.module').then(m => m.GarmentListModule)
  },
  {
    path: 'garmentDetail/:id',
    loadChildren: () => import('./pages/garment-detail/garment-detail.module').then(m=> m.GarmentDetailModule)
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
    path: 'login',
    loadChildren: () => import('./pages/user/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/user/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'cart-detail',
    component: CartDetailComponent
  },
  {
    path: 'main',
    component: MainComponent
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
