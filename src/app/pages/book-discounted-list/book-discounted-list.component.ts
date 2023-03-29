import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountedProductsService } from 'src/app/core/services/discounted-products/discounted-products.service';
import { DiscountedProduct } from 'src/app/core/services/discounted-products/models/discounted-product.models';

@Component({
  selector: 'app-book-discounted-list',
  templateUrl: './book-discounted-list.component.html',
  styleUrls: ['./book-discounted-list.component.scss']
})
export class BookDiscountedListComponent implements OnInit {

  page: number = 1;
  public discountedProduct?: DiscountedProduct;
  public discountedProducts: DiscountedProduct[] = [];
  public price: string = '';

  constructor(
    private router: Router,
    private discountedProductsService: DiscountedProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      const discountedBookCategory = 'libros';
      this.discountedProductsService.getDiscountedProductsCategory(discountedBookCategory).subscribe((book) => {
        this.discountedProducts = book;
      })
    });
  }

  public getDiscountedProductDetail(id: string) {
    this.discountedProductsService.getDiscountedProductsDetail(id).subscribe((bookDetail) => {
      this.router.navigate(['bookDiscountedDetail', bookDetail._id])
    })
  }
  public sort(value: string){
    this.price = value;
    console.log(this.price);
  }
  
}
