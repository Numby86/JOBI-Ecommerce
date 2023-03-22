import { CartService } from './../../core/services/cart/cart.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {

  public product?: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const bookId = params['id'];
      this.productsService.getProductsDetail(bookId).subscribe((book) => {
        this.product = book;
      })
    });
  }

  public addToCart(product: Product){
    return this.cartService.addProduct(product);
  }

  public backToList(){
    this.router.navigate(['book-list'])
  }

}
