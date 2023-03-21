import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBook } from './models/api-book.models';

//const API_BOOK_URL = "https://nodejs-proyectodb-h80kv99v0-numby86.vercel.app";
const API_BOOK_URL = "https://project-jobi-api.vercel.app";

@Injectable({
  providedIn: 'root'
})
export class ApiBooksService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiBooks(): Observable<ApiBook[]> {
    return this.http.get<ApiBook[]>(`${API_BOOK_URL}/books`)
  }

  public getApiBookDetail(id: string): Observable<ApiBook> {
    return this.http.get<ApiBook>(`${API_BOOK_URL}/books/${id}`);
  }
}
