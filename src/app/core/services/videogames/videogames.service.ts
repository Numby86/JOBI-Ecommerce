import { APIVideogamesRes } from './ApiVideogamesRes.model';
import { Videogames } from './Videogames.model';
import { Observable, map } from 'rxjs';
import { ApiVideogamesService } from './api/api-videogames.service';
import { Injectable } from '@angular/core';
import { transformVideogame } from './videogames.helpers';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  constructor(
    private apiVideogamesService: ApiVideogamesService,
  ) { }

  public getVideogames(): Observable<Videogames[]>{
    return this.apiVideogamesService.getApiVideogames().pipe(
      map((videogames: APIVideogamesRes[]) => {
        return videogames.map((videogame) => transformVideogame(videogame));
        })
    )
  };

  public getVideogameDetail(id: string): Observable<Videogames>{
    return this.apiVideogamesService.getApiVideogamesDetail(id).pipe(
      map((videogame: Videogames) => {
        return transformVideogame(videogame);
      })
    )
  }

}
