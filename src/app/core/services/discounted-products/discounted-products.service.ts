import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { LoadingService } from '../loading/loading.service';
import { ApiDiscountedProduct } from './api/models/api-discounted-products.models';
import { ApiDiscountedProductsService } from './api/models/api-discounted-products.service';
import { transformDiscountedProduct } from './discounted-products.helpers';
import { Category, DiscountedProduct } from './models/discounted-product.models';

@Injectable({
  providedIn: 'root'
})
export class DiscountedProductsService {

  constructor(
    private apiDiscountedProductsService: ApiDiscountedProductsService,
    private loadingService: LoadingService
  ) { }

  public getDiscountedProducts(): Observable<DiscountedProduct[]> {
    this.loadingService.showLoading();
    return this.apiDiscountedProductsService.getApiDiscountedProducts().pipe(
      map((products: ApiDiscountedProduct[]) => {
        return products.map((product) =>
        transformDiscountedProduct(product));
      }),
      tap(() => this.loadingService.hideLoading())
    )
  };

  public getDiscountedProductsDetail(id: string): Observable<DiscountedProduct> {
    this.loadingService.showLoading();
    return this.apiDiscountedProductsService.getApiDetailDiscountedProduct(id).pipe(
      map((apiProduct) => {
        return transformDiscountedProduct(apiProduct);
      }),
      tap(() => this.loadingService.hideLoading())
    )
    };

    public getDiscountedProductsCategory(category: Category): Observable<DiscountedProduct[]> {
      this.loadingService.showLoading();
      return this.apiDiscountedProductsService.getApiCategoryDiscountedProduct(category).pipe(
        map((apiProduct: ApiDiscountedProduct[]) => {
          return apiProduct.map((product) =>
            transformDiscountedProduct(product));
        }),
        tap(() => this.loadingService.hideLoading())
      )
    }
}
