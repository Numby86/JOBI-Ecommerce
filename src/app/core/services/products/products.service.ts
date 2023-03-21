import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { LoadingService } from '../loading/loading.service';
import { ApiProductsService } from './api/api-products.service';
import { ApiProduct } from './api/models/api-product.models';
import { Product } from './models/product.models';
import { transformProduct } from './products.helpers';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private apiProductsService: ApiProductsService,
    private loadingService: LoadingService
  ) { }

  public getProducts(): Observable<Product[]> {
    this.loadingService.showLoading();
    return this.apiProductsService.getApiProducts().pipe(
      map((products: ApiProduct[]) => {
        return products.map((product) =>
        transformProduct(product));
      }),
      tap(() => this.loadingService.hideLoading())
    )
  };

  public getProductsDetail(id: string): Observable<Product> {
    this.loadingService.showLoading();
    return this.apiProductsService.getApiDetailProduct(id).pipe(
      map((apiProduct) => {
        return transformProduct(apiProduct);
      }),
      tap(() => this.loadingService.hideLoading())
    )
    };

    public getProductsCategory(): Observable<Product[]> {
      this.loadingService.showLoading();
      return this.apiProductsService.getApiCategoryBookProduct().pipe(
        map((apiProduct: ApiProduct[]) => {
          return apiProduct.map((product) => 
          transformProduct(product));
        }),
        tap(() => this.loadingService.hideLoading())
      )
      }

      public getGarmentsCategory(): Observable<Product[]> {
        this.loadingService.showLoading();
        return this.apiProductsService.getApiCategoryGarmentProduct().pipe(
          map((apiProduct: ApiProduct[]) => {
            return apiProduct.map((product) => 
            transformProduct(product));
          }),
          tap(() => this.loadingService.hideLoading())
        )
        }

        public getToysCategory(): Observable<Product[]> {
          this.loadingService.showLoading();
          return this.apiProductsService.getApiCategoryToysProduct().pipe(
            map((apiProduct: ApiProduct[]) => {
              return apiProduct.map((product) => 
              transformProduct(product));
            }),
            tap(() => this.loadingService.hideLoading())
          )
          }

          public getVideogamesCategory(): Observable<Product[]> {
            this.loadingService.showLoading();
            return this.apiProductsService.getApiCategoryVideogamesProduct().pipe(
              map((apiProduct: ApiProduct[]) => {
                return apiProduct.map((product) => 
                transformProduct(product));
              }),
              tap(() => this.loadingService.hideLoading())
            )
            }

  }
