import { Component, OnInit } from '@angular/core';
import { VideogamesService } from '../../../core/services/videogames/videogames.service';
import { Videogames } from '../../../core/services/videogames/Videogames.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public videogames: Videogames[] = [];
  public total: number = 0;

  constructor(
    private router: Router,
    private videogamesService: VideogamesService
  ){}

  public ngOnInit(): void {
    this.videogamesService.getVideogames().subscribe((videogamesApi) => {
      this.videogames = videogamesApi;
    })

    this.videogames.forEach((videogame) => {
      this.total += videogame.stock * videogame.price;
    })
  }

}
