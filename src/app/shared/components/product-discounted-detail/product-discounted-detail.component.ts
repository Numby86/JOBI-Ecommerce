import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiscountedProduct } from 'src/app/core/services/discounted-products/models/discounted-product.models';

@Component({
  selector: 'app-product-discounted-detail',
  templateUrl: './product-discounted-detail.component.html',
  styleUrls: ['./product-discounted-detail.component.scss']
})
export class ProductDiscountedDetailComponent {

  @Input() public discountedProduct?: DiscountedProduct;

  @Output() public onBack: EventEmitter<void> = new EventEmitter<void>;

  @Output() public onAdd: EventEmitter<void> = new EventEmitter<void>;

  @Output() public onDiscountDetail: EventEmitter<void> = new EventEmitter<void>;


  public backList() {
    this.onBack.emit()
  }

  public addCart() {
    this.onAdd.emit()
  }

}
