import { VideogamesService } from './../../core/services/videogames/videogames.service';
import { Videogames } from './../../core/services/videogames/Videogames.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.scss']
})
export class VideogameListComponent implements OnInit {

  public videogames: Videogames[] = [];

  constructor(
    private router: Router,
    private videogamesService: VideogamesService
  ){}

  public ngOnInit(): void {
    this.videogamesService.getVideogames().subscribe((videogamesApi) => {
      this.videogames = videogamesApi;
    })
  }

  public goToDetail(id: string){
    
    if(this.videogames) {
      this.router.navigate(['videogames', id])
    }
  }



}
