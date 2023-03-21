import { Products } from './../../core/services/cart/ApiProducts.model';
import { CartService } from './../../core/services/cart/cart.service';
import { VideogamesService } from './../../core/services/videogames/videogames.service';
import { Videogames } from './../../core/services/videogames/Videogames.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-videogame-detail',
  templateUrl: './videogame-detail.component.html',
  styleUrls: ['./videogame-detail.component.scss']
})
export class VideogameDetailComponent implements OnInit {

  //public videogame?: Videogames;
  public product?: Product;
  myCart$ = this.cartService.myCart$;
  public products: Products[] = [];
  public total: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private videogamesService: VideogamesService,
    private productsService: ProductsService,
    private router: Router,
    private cartService: CartService
  )  {
    
    this.activatedRoute.params.subscribe((params) => {
      const videogameId = params['id'];
      this.productsService.getProductsDetail(videogameId).subscribe((productsService) => {
        this.product = productsService;
      })
    });
    
  }

  public ngOnInit(): void {
    this.cartService.getApiProducts().subscribe((productsApi) => {
      this.products = productsApi;
    })
  }

  public backToList(){
    this.router.navigate(['videogames'])
  }

  public addToCart(product: Products){
    return this.cartService.addProduct(product);
  }

}
