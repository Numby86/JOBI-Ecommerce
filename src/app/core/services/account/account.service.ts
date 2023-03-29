import { APIOrder } from './ApiOrder.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_ORDER_URL = "https://project-jobi-api.vercel.app/cart";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getApiProducts(): Observable<APIOrder[]>{
    return this.http.get<APIOrder[]>(API_ORDER_URL);
  }

}
