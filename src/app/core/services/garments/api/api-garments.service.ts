import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiGarment } from './models/api-garment.models';

const API_GARMENT_URL = "https://nodejs-proyectodb-h80kv99v0-numby86.vercel.app"

@Injectable({
  providedIn: 'root'
})
export class ApiGarmentsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiGarments(): Observable<ApiGarment[]> {
    return this.http.get<ApiGarment[]>(`${API_GARMENT_URL}/clothes`);
  }

  public getApiGarmentDetail(id: string): Observable<ApiGarment> {
    return this.http.get<ApiGarment>(`${API_GARMENT_URL}/clothes/${id}`);
  }
}
