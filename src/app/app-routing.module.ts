import { CartDetailComponent } from './shared/components/cart-detail/cart-detail.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';


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
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'home/book-discounted-list',
    loadChildren: () => import('./pages/book-discounted-list/book-discounted-list.module').then(m=> m.BookDiscountedListModule)
  },
  {
    path: 'bookDiscountedDetail/:id',
    loadChildren: () => import('./pages/book-discounted-detail/book-discounted-detail.module').then(m=> m.BookDiscountedDetailModule)
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
    path: 'home/videogames-discounted-list',
    loadChildren: () => import('./pages/videogame-discounted-list/videogame-discounted-list.module').then(m=> m.VideogameDiscountedListModule)
  },
  {
    path: 'videogamesDiscountedDetail/:id',
    loadChildren: () => import('./pages/videogame-discounted-detail/videogame-discounted-detail.module').then(m=> m.VideogameDiscountedDetailModule)
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
    path: 'home/garment-discounted-list',
    loadChildren: () => import('./pages/garment-discounted-list/garment-discounted-list.module').then(m=> m.GarmentDiscountedListModule)
  },
  {
    path: 'garmentDiscountedDetail/:id',
    loadChildren: () => import('./pages/garment-discounted-detail/garment-discounted-detail.module').then(m=> m.GarmentDiscountedDetailModule)
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
    path: 'home/toys-discounted-list',
    loadChildren: () => import('./pages/toys-discounted-list/toys-discounted-list.module').then(m=> m.ToysDiscountedListModule)
  },
  {
    path: 'toysDiscountedDetail/:id',
    loadChildren: () => import('./pages/toys-discounted-detail/toys-discounted-detail.module').then(m=> m.ToysDiscountedDetailModule)
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
    component: CartDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/url-not-found/url-not-found.module').then(m=> m.UrlNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
