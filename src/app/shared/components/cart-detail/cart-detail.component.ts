import { UserServiceService } from './../../../core/services/user/user-service.service';
import { Product } from 'src/app/core/services/products/models/product.models';
import { CartService } from './../../../core/services/cart/cart.service';
import { Router } from '@angular/router';
import { Products } from './../../../core/services/cart/ApiProducts.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit{

  public myCart$ = this.cartService.myCart$;
  public products: Product[] = [];
  public total: number = 0;
  public oneOrder: Product[] = [];
  public userId: string | null;
  public myLyst: any;
  public totalPrice: string = '';

  constructor(
    private router: Router,
    private cartService: CartService,
    private userService: UserServiceService
  ){
    this.userId = this.userService.getUserId();
  }

  public ngOnInit(): void {

    this.cartService.getApiProducts().subscribe((productsApi) => {
      this.products = productsApi;
    })

    this.cartService.getMyList().subscribe((list) => {
      this.myLyst = list;
    })

    this.totalPrice = this.cartService.totalCart();

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

  public sendOrder() {
    const userId = this.userId;
    const products = this.myLyst;
    const total = this.totalPrice;
    const newOrder = {
      "products": products,
      "user": userId,
      "total": total
  };
  this.router.navigate(['account']);
    return this.cartService.sendOrder(newOrder).subscribe();
  }
}
