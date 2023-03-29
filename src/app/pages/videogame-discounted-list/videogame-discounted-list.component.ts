import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountedProductsService } from 'src/app/core/services/discounted-products/discounted-products.service';
import { DiscountedProduct } from 'src/app/core/services/discounted-products/models/discounted-product.models';

@Component({
  selector: 'app-videogame-discounted-list',
  templateUrl: './videogame-discounted-list.component.html',
  styleUrls: ['./videogame-discounted-list.component.scss']
})
export class VideogameDiscountedListComponent implements OnInit {

  page: number = 1;
  public discountedProduct?: DiscountedProduct;
  public discountedProducts: DiscountedProduct[] = [];
  public price: string = '';

  constructor(
    private router: Router,
    private discountedProductsService: DiscountedProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      const discountedVideogameCategory = 'videojuegos';
      this.discountedProductsService.getDiscountedProductsCategory(discountedVideogameCategory).subscribe((videogame) => {
        this.discountedProducts = videogame;
      })
    });
  }

  public getDiscountedProductDetail(id: string) {
    this.discountedProductsService.getDiscountedProductsDetail(id).subscribe((videogameDetail) => {
      this.router.navigate(['videogamesDiscountedDetail', videogameDetail._id])
    })
  }
  public sort(value: string){
    this.price = value;
    console.log(this.price);
  }

}
