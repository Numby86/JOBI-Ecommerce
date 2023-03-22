import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-garment-detail',
  templateUrl: './garment-detail.component.html',
  styleUrls: ['./garment-detail.component.scss']
})
export class GarmentDetailComponent {

    public product?: Product;

    constructor (
      private activatedRoute: ActivatedRoute,
      private productsService: ProductsService,
      private cartService: CartService
    ){
      this.activatedRoute.params.subscribe((params) => {
        const garmentId = params['id'];
        this.productsService.getProductsDetail(garmentId).subscribe((garment) => {
          this.product = garment
        })
      })
    }

}
