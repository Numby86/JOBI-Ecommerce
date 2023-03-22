import { CartService } from './../../core/services/cart/cart.service';
import { Garment } from 'src/app/core/services/garments/models/garment.models';
import { Component } from '@angular/core';
import { GarmentsService } from 'src/app/core/services/garments/garments.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/services/products/models/product.models';

@Component({
  selector: 'app-garment-detail',
  templateUrl: './garment-detail.component.html',
  styleUrls: ['./garment-detail.component.scss']
})
export class GarmentDetailComponent {

    //public garment?: Garment;
    public product?: Product;

    constructor (
      private cartService: CartService
    ){ }

    public addToCart(product: Product){
      return this.cartService.addProduct(product);
    }

    }
