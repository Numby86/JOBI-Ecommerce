import { Garment } from 'src/app/core/services/garments/models/garment.models';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      private cartService: CartService,
      private router: Router
    ){
      this.activatedRoute.params.subscribe((params) => {
        const garmentId = params['id'];
        this.productsService.getProductsDetail(garmentId).subscribe((garment) => {
          this.product = garment
        })
      })
    }
    
    public backToList(){
      this.router.navigate(['garment-list'])
    }

    public addToCart(product: Product){
      return this.cartService.addProduct(product);
    }

}

