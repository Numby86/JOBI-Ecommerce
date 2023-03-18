import { VideogamesService } from './../../core/services/videogames/videogames.service';
import { Videogames } from './../../core/services/videogames/Videogames.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videogame-detail',
  templateUrl: './videogame-detail.component.html',
  styleUrls: ['./videogame-detail.component.scss']
})
export class VideogameDetailComponent {

  public videogame?: Videogames;

  constructor(
    private activatedRoute: ActivatedRoute,
    private videogamesService: VideogamesService,
    private router: Router
  )  {



    this.activatedRoute.params.subscribe((params) => {
      const videogameId = params['id'];
      this.videogamesService.getVideogameDetail(videogameId).subscribe((videogame) => {
        this.videogame = videogame;
        console.log(videogame);
      })
    });
    
  }

  public backToList(){
    this.router.navigate(['videogames'])
  }

}
