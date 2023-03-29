import { CartService } from './../../services/cart/cart.service';
import { UserServiceService } from './../../services/user/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logged: boolean = false;
  public logOut: boolean = false;
  public viewCart: boolean = false;
  public user?: string | null;

  
  
  constructor(
    private router: Router,
    private userService: UserServiceService,
    private cartService: CartService
  ){
    
  }

  public ngOnInit(): void {
    this.userService.isLogged();

    this.userService.userLogged$.subscribe((isLogged) => this.logged = isLogged);

    this.user = this.userService.getUserName();
  }

  public navigateToList() {
    this.router.navigate(['home'])
  }

  public addButton(){
    this.logOut = true;
  }

  public cerrarSesion(){
    this.userService.logoutUser();
  }

  public onToggleCart(){
    this.viewCart = !this.viewCart;
  }

  public totalNumProducts(){
    const totalProducts = this.cartService.totalNumProducts();
    return totalProducts;
  }
}
