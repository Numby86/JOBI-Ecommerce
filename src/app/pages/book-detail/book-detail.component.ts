import { CartService } from './../../core/services/cart/cart.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/core/services/books/books.service';
import { Book } from 'src/app/core/services/books/models/book.models';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {

  //public book?: Book;
  public product?: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    //private booksService: BooksService,
    private productsService: ProductsService,
    private cartService: CartService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const bookId = params['id'];
      this.productsService.getProductsDetail(bookId).subscribe((book) => {
        this.product = book;
      })
    });
  }

}
