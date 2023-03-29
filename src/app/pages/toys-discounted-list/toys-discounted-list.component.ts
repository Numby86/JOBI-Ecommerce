import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountedProductsService } from 'src/app/core/services/discounted-products/discounted-products.service';
import { DiscountedProduct } from 'src/app/core/services/discounted-products/models/discounted-product.models';

@Component({
  selector: 'app-toys-discounted-list',
  templateUrl: './toys-discounted-list.component.html',
  styleUrls: ['./toys-discounted-list.component.scss']
})
export class ToysDiscountedListComponent implements OnInit {

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
      const discountedToyCategory = 'juguetes';
      this.discountedProductsService.getDiscountedProductsCategory(discountedToyCategory).subscribe((toy) => {
        this.discountedProducts = toy;
      })
    });
  }

  public getDiscountedProductDetail(id: string) {
    this.discountedProductsService.getDiscountedProductsDetail(id).subscribe((toyDetail) => {
      this.router.navigate(['toysDiscountedDetail', toyDetail._id])
    })
  }
  public sort(value: string){
    this.price = value;
    console.log(this.price);
  }

}
