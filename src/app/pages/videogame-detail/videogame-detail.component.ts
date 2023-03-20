import { Products } from './../../core/services/cart/ApiProducts.model';
import { CartService } from './../../core/services/cart/cart.service';
import { VideogamesService } from './../../core/services/videogames/videogames.service';
import { Videogames } from './../../core/services/videogames/Videogames.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videogame-detail',
  templateUrl: './videogame-detail.component.html',
  styleUrls: ['./videogame-detail.component.scss']
})
export class VideogameDetailComponent implements OnInit {

  public videogame?: Videogames;
  myCart$ = this.cartService.myCart$;
  public products: Products[] = [];
  public total: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private videogamesService: VideogamesService,
    private router: Router,
    private cartService: CartService
  )  {
    
    this.activatedRoute.params.subscribe((params) => {
      const videogameId = params['id'];
      this.videogamesService.getVideogameDetail(videogameId).subscribe((videogame) => {
        this.videogame = videogame;
        console.log(videogame);
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
