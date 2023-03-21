import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/models/product.models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() public product?: Product;

  @Output() public onDetail: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}

  // public navigateToDetail() {
  //   if(this.product?.category === 'libros') {
  //     this.router.navigate(['detail', this.product._id])
  //   }
  //   else if(this.product?.category === 'videojuegos') {
  //     this.router.navigate(['videogames', this.product._id])
  //   }
  //   else if(this.product?.category === 'juguetes') {
  //     this.router.navigate(['toysDetail', this.product._id])
  //   }
  //   else {
  //    this.router.navigate(['garmentDetail', this.product?._id])
  //   }
  // }

  public navigateToDetail() {
    this.onDetail.emit()
  }

}
