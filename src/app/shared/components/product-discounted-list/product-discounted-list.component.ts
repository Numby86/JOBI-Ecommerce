import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { DiscountedProduct } from 'src/app/core/services/discounted-products/models/discounted-product.models';

@Component({
  selector: 'app-product-discounted-list',
  templateUrl: './product-discounted-list.component.html',
  styleUrls: ['./product-discounted-list.component.scss']
})
export class ProductDiscountedListComponent {

  @Input() public discountedProduct?: DiscountedProduct;

  @Output() public onDiscountedDetail: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router,
    private cartService: CartService
    ) {}

  public navigateToDiscountedDetail() {
    this.onDiscountedDetail.emit()
  }

  public addToCart(product: DiscountedProduct){
    return this.cartService.addProduct(product);
  }

}
