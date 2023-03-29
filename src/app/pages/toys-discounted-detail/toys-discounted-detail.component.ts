import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { DiscountedProductsService } from 'src/app/core/services/discounted-products/discounted-products.service';
import { DiscountedProduct } from 'src/app/core/services/discounted-products/models/discounted-product.models';

@Component({
  selector: 'app-toys-discounted-detail',
  templateUrl: './toys-discounted-detail.component.html',
  styleUrls: ['./toys-discounted-detail.component.scss']
})
export class ToysDiscountedDetailComponent {

  public discountedProduct?: DiscountedProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private discountedProductsService: DiscountedProductsService,
    private cartService: CartService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const toyId = params['id'];
      this.discountedProductsService.getDiscountedProductsDetail(toyId).subscribe((toy) => {
        this.discountedProduct = toy;
      })
    });
  }

  public addToCart(discountProduct: DiscountedProduct){
    return this.cartService.addProduct(discountProduct);
  }

  public backToList(){
    this.router.navigate(['home/toys-discounted-list'])
  }

}
