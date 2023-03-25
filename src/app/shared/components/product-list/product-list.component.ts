import { CartService } from './../../../core/services/cart/cart.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/models/product.models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{

  @Input() public product?: Product;

  @Output() public onDetail: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router,
    private cartService: CartService
    ) {}

  public navigateToDetail() {
    this.onDetail.emit()
  }

  public addToCart(product: Product){
    return this.cartService.addProduct(product);
  }
}
