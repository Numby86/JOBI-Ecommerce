import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from '../../core/services/products/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  page: number = 1;
  public product?: Product;
  public products: Product[] = [];
  public total: number = 210;
  public price: string = '';
  public term = '';

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  public ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
  public getProductDetail(id: string) {
    this.productsService.getProductsDetail(id).subscribe((productDetail) => {
      this.router.navigate(['detail', productDetail._id]);
    });
  }
  public sort(value: string){
  this.price = value;
  console.log(this.price);
}
}
