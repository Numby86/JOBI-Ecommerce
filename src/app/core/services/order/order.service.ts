import { Observable, BehaviorSubject } from 'rxjs';
import { Register } from 'src/app/core/services/user/register.model';
import { Login } from './../user/login.model';
import { Product } from 'src/app/core/services/products/models/product.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './../loading/loading.service';
import { Router } from '@angular/router';

const API_ORDER_URL = "https://project-jobi-api.vercel.app/cart";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private myList: Product[] = [];

  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  public sendOrder(products: Product[]): Observable<any>{
    return this.http.post<any>(`${API_ORDER_URL}`, products)
  }


}
