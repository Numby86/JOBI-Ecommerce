import { CartService } from '../../../core/services/cart/cart.service';
import { Products } from './../../../core/services/cart/ApiProducts.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  myCart$ = this.cartService.myCart$;
  public products: Products[] = [];
  public total: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
  ){}

  public ngOnInit(): void {

    this.cartService.getApiProducts().subscribe((productsApi) => {
      this.products = productsApi;
    })

  }

  public totalProduct(price: number, units: number){
    return price * units;
  }

  public deleteProduct(id: string){
    this.cartService.deleteProduct(id);
  }

  public updateUnits(operation: string, id: string){
    const product = this.cartService.findProductById(id);
    if (product) {
      if (operation === 'minus' && product.stock > 0) {
        product.stock = product.stock - 1;
      }
      if (operation === 'add') {
        product.stock = product.stock + 1;
      }
      if (product.stock === 0) {
        this.deleteProduct(id);
      }
    }
  }

  public totalCart(){
    const result = this.cartService.totalCart();
    return result;
  }

  public totalNumProducts(){
    const totalProducts = this.cartService.totalNumProducts();
    return totalProducts;
  }
}
