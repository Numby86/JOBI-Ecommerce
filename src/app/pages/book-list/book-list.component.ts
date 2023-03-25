import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  page: number = 1;
  public product?: Product;
  public products: Product[] = [];
  public price: string = '';

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      const bookCategory = 'libros';
      this.productsService.getProductsCategory(bookCategory).subscribe((book) => {
        this.products = book;
      })
    });
  }

public getProductDetail(id: string) {
  this.productsService.getProductsDetail(id).subscribe((bookDetail) => {
    this.router.navigate(['detail', bookDetail._id])
  })
}
public sort(value: string){
  this.price = value;
  console.log(this.price);
}

}
