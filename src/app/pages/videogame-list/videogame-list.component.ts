import { CartService } from './../../core/services/cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.scss']
})
export class VideogameListComponent implements OnInit {

  page: number = 1;
  public product?: Product;
  public products: Product[] = [];
  public price: string = '';
  

  
  constructor(
    private router: Router,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ){}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      const videdogameCategory = 'videojuegos';
      this.productsService.getProductsCategory(videdogameCategory).subscribe((videogame) => {
        this.products = videogame;
      })
    });
   }

    public getProductDetail(id: string) {
      this.productsService.getProductsDetail(id).subscribe((videogameDetail) => {
        this.router.navigate(['videogames', videogameDetail._id])
      })
    }

    public addToCart(addProduct: Product){
      return this.cartService.addProduct(addProduct);
    }

    public sort(value: string){
      this.price = value;
      console.log(this.price);
    }
    
  }

