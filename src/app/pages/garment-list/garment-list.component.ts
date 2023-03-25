import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-garment-list',
  templateUrl: './garment-list.component.html',
  styleUrls: ['./garment-list.component.scss']
})
export class GarmentListComponent implements OnInit {

  page: number = 1;
  public product?: Product ;
  public products: Product[] = [];
  public price: string = '';
  
  constructor(
    private router :Router,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ){}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      const garmentCategory = 'ropa';
      this.productsService.getProductsCategory(garmentCategory).subscribe((garment) => {
        this.products = garment;
      })
    });
  }

  public getProductDetail(id: string) {
    this.productsService.getProductsDetail(id).subscribe((garmentDetail) => {
      this.router.navigate(['garmentDetail', garmentDetail._id])
    })
  }
  
  public sort(value: string){
    this.price = value;
    console.log(this.price);
  }
}
