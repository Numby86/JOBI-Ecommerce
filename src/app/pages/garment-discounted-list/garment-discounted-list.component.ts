import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountedProductsService } from 'src/app/core/services/discounted-products/discounted-products.service';
import { DiscountedProduct } from 'src/app/core/services/discounted-products/models/discounted-product.models';

@Component({
  selector: 'app-garment-discounted-list',
  templateUrl: './garment-discounted-list.component.html',
  styleUrls: ['./garment-discounted-list.component.scss']
})
export class GarmentDiscountedListComponent implements OnInit {

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
      const discountedGarmentCategory = 'ropa';
      this.discountedProductsService.getDiscountedProductsCategory(discountedGarmentCategory ).subscribe((garment) => {
        this.discountedProducts = garment;
      })
    });
  }

  public getDiscountedProductDetail(id: string) {
    this.discountedProductsService.getDiscountedProductsDetail(id).subscribe((garmentDetail) => {
      this.router.navigate(['garmentDiscountedDetail', garmentDetail._id])
    })
  }
  public sort(value: string){
    this.price = value;
    console.log(this.price);
  }

}
