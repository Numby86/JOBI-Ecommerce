import { ActivatedRoute, Router } from '@angular/router';
import { ToysService } from './../../core/services/toys/toys.service';
import { ToysInterface } from './../../core/services/toys/models/toys.models';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-toys-list',
  templateUrl: './toys-list.component.html',
  styleUrls: ['./toys-list.component.scss']
})
export class ToysListComponent implements OnInit{

  page: number = 1;
  // public toy?: ToysInterface;
  // public toys: ToysInterface[] = [];
  public product?: Product;
  public products: Product[] = [];

constructor(
private router: Router,
//private ToysService: ToysService
private productsService: ProductsService,
private activatedRoute: ActivatedRoute
){}

public ngOnInit(): void {
  this.activatedRoute.params.subscribe((params) => {
    //const bookCategory = params['libros'];
    this.productsService.getToysCategory().subscribe((toy) =>{
      this.products = toy
    })
  })
  }

  public getProductDetail(id: string) {
    this.productsService.getProductsDetail(id).subscribe((toysDetail) => {
      this.router.navigate(['toysDetail', toysDetail._id])
    })
  }
}
