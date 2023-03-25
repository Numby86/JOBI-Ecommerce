import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/services/products/models/product.models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  @Input() public product?: Product;

  @Output() public onBack: EventEmitter<void> = new EventEmitter<void>;

  @Output() public onAdd: EventEmitter<void> = new EventEmitter<void>;

  @Output() public onDetail: EventEmitter<void> = new EventEmitter<void>;


  public backList() {
    this.onBack.emit()
  }

  public addCart() {
    this.onAdd.emit()
  }

}
