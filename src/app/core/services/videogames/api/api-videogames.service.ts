import { APIVideogamesRes } from './../ApiVideogamesRes.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//const API_VIDEOGAMES_URL = 'https://nodejs-proyectodb-h80kv99v0-numby86.vercel.app/videogames';
const API_VIDEOGAMES_URL = 'https://project-jobi-api.vercel.app/videogames'

@Injectable({
  providedIn: 'root'
})
export class ApiVideogamesService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiVideogames(): Observable<APIVideogamesRes[]>{
    return this.http.get<APIVideogamesRes[]>(API_VIDEOGAMES_URL);
  }

  public getApiVideogamesDetail(id: string): Observable<APIVideogamesRes>{
    return this.http.get<APIVideogamesRes>(`${API_VIDEOGAMES_URL}/${id}`);
  }

}
