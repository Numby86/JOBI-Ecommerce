import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiToysInterface } from './models/api-toys.models';
import { Observable } from 'rxjs';

const API_TOYS_URL = "https://nodejs-proyectodb-h80kv99v0-numby86.vercel.app"

@Injectable({
  providedIn: 'root'
})
export class ApiToysService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiToys(): Observable<ApiToysInterface[]> {
    return this.http.get<ApiToysInterface[]>(`${API_TOYS_URL}/toys`)
  }

  public getApiToysDetail(id: string): Observable<ApiToysInterface> {
    return this.http.get<ApiToysInterface>(`${API_TOYS_URL}/toys/${id}`);
  }
}
