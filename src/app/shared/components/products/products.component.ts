import { CartService } from './../../../core/services/cart/cart.service';
import { Router } from '@angular/router';
import { Products } from './../../../core/services/cart/ApiProducts.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public products: Products[] = [];
  public viewCart: boolean = false;
  page: number = 1;
  public total: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService
  ){}

  public ngOnInit(): void {

    this.cartService.getApiProducts().subscribe((productsApi) => {
      this.products = productsApi;
    })

  }

  public onToggleCart(){
    this.viewCart = !this.viewCart;
  }

  public addToCart(product: Products){
    return this.cartService.addProduct(product);
  }

}
