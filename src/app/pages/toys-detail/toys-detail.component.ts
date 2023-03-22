import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';


@Component({
  selector: 'app-toys-detail',
  templateUrl: './toys-detail.component.html',
  styleUrls: ['./toys-detail.component.scss'],
})
export class ToysDetailComponent {
  
  public product?: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const toyId = params['id'];
      this.productsService.getProductsDetail(toyId).subscribe((toy) => {
        this.product = toy;
      });
    });
  }
}
