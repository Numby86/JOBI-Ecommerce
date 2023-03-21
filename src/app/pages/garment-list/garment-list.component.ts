import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GarmentsService } from 'src/app/core/services/garments/garments.service';
import { Garment } from 'src/app/core/services/garments/models/garment.models';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-garment-list',
  templateUrl: './garment-list.component.html',
  styleUrls: ['./garment-list.component.scss']
})
export class GarmentListComponent implements OnInit {

  page: number = 1;
  // public garment?: Garment;
  // public garments: Garment[] = [];
  public product?: Product ;
  public products: Product[] = [];
  
  constructor(
    private router :Router,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
    //private garmentsService: GarmentsService
  ){}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      //const bookCategory = params['libros'];
      this.productsService.getGarmentsCategory().subscribe((garment) =>{
        this.products = garment
      })
    })
    
  }
}
