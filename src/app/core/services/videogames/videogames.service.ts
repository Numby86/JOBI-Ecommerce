import { APIVideogamesRes } from './ApiVideogamesRes.model';
import { Videogames } from './Videogames.model';
import { Observable, map, tap } from 'rxjs';
import { ApiVideogamesService } from './api/api-videogames.service';
import { Injectable } from '@angular/core';
import { transformVideogame } from './videogames.helpers';
import { LoadingService } from './../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  constructor(
    private apiVideogamesService: ApiVideogamesService,
    private loadingService: LoadingService
  ) { }

  public getVideogames(): Observable<Videogames[]>{
    this.loadingService.showLoading();
    return this.apiVideogamesService.getApiVideogames().pipe(
      map((videogames: APIVideogamesRes[]) => {
        return videogames.map((videogame) => transformVideogame(videogame));
        }),
        tap(() => this.loadingService.hideLoading())
    )
  };

  public getVideogameDetail(id: string): Observable<Videogames>{
    this.loadingService.showLoading();
    return this.apiVideogamesService.getApiVideogamesDetail(id).pipe(
      map((videogame: Videogames) => {
        return transformVideogame(videogame);
      }),
      tap(() => this.loadingService.hideLoading())
    )
  }

}
