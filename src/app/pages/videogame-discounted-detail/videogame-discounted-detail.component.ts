import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { DiscountedProductsService } from 'src/app/core/services/discounted-products/discounted-products.service';
import { DiscountedProduct } from 'src/app/core/services/discounted-products/models/discounted-product.models';

@Component({
  selector: 'app-videogame-discounted-detail',
  templateUrl: './videogame-discounted-detail.component.html',
  styleUrls: ['./videogame-discounted-detail.component.scss']
})
export class VideogameDiscountedDetailComponent {

  public discountedProduct?: DiscountedProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private discountedProductsService: DiscountedProductsService,
    private cartService: CartService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const videogameId = params['id'];
      this.discountedProductsService.getDiscountedProductsDetail(videogameId).subscribe((videogame) => {
        this.discountedProduct = videogame;
      })
    });
  }

  public addToCart(discountProduct: DiscountedProduct){
    return this.cartService.addProduct(discountProduct);
  }

  public backToList(){
    this.router.navigate(['home/videogames-discounted-list'])
  }

}
