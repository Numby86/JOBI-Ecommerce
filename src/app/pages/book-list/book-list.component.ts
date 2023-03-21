import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/core/services/books/books.service';
import { Book } from 'src/app/core/services/books/models/book.models';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  page: number = 1;
  //public book?: Book;
  public product?: Product;
  //public books: Book[] = [];
  public products: Product[] = [];

  constructor(
    private router: Router,
    //private booksService: BooksService,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      //const bookCategory = params['libros'];
      this.productsService.getProductsCategory().subscribe((book) =>{
        this.products = book
      })
    })
  }



}
