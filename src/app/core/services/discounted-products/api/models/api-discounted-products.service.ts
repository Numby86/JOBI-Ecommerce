import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiDiscountedProduct, Category } from './api-discounted-products.models';

const API_DISCOUNTED_PRODUCT_URL = "https://project-jobi-api.vercel.app/discountedProducts"

@Injectable({
  providedIn: 'root'
})
export class ApiDiscountedProductsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiDiscountedProducts(): Observable<ApiDiscountedProduct[]> {
    return this.http.get<ApiDiscountedProduct[]>(`${API_DISCOUNTED_PRODUCT_URL}`)
  }

  public getApiDetailDiscountedProduct(id: string): Observable<ApiDiscountedProduct> {
    return this.http.get<ApiDiscountedProduct>(`${API_DISCOUNTED_PRODUCT_URL}/${id}`)
  }

  public getApiCategoryDiscountedProduct(category: Category): Observable<ApiDiscountedProduct[]> {
    return this.http.get<ApiDiscountedProduct[]>(`${API_DISCOUNTED_PRODUCT_URL}/category/${category}`)
  }
}
