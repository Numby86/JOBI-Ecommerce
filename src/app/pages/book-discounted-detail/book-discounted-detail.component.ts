import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { DiscountedProductsService } from 'src/app/core/services/discounted-products/discounted-products.service';
import { DiscountedProduct } from 'src/app/core/services/discounted-products/models/discounted-product.models';

@Component({
  selector: 'app-book-discounted-detail',
  templateUrl: './book-discounted-detail.component.html',
  styleUrls: ['./book-discounted-detail.component.scss']
})
export class BookDiscountedDetailComponent {

  public discountedProduct?: DiscountedProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private discountedProductsService: DiscountedProductsService,
    private cartService: CartService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const bookId = params['id'];
      this.discountedProductsService.getDiscountedProductsDetail(bookId).subscribe((book) => {
        this.discountedProduct = book;
      })
    });
  }

  public addToCart(discountProduct: DiscountedProduct){
    return this.cartService.addProduct(discountProduct);
  }

  public backToList(){
    this.router.navigate(['home/book-discounted-list'])
  }

}
