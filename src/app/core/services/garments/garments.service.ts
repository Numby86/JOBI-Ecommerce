import { Injectable } from '@angular/core';
import { ApiGarmentsService } from './api/api-garments.service';
import { Observable, map, tap } from 'rxjs';
import { ApiGarment } from './api/models/api-garment.models';
import { Garment } from './models/garment.models';
import { transformGarment} from './garments.helpers'
import { LoadingService } from './../loading/loading.service';


@Injectable({
  providedIn: 'root'
})
export class GarmentsService {

  constructor(
    private apiGarmentsService: ApiGarmentsService,
    private loadingService: LoadingService
  ) { }

  public getGarments(): Observable<Garment[]> {
    this.loadingService.showLoading();
    return this.apiGarmentsService.getApiGarments().pipe(
      map((garments: ApiGarment[]) =>{
        return garments.map((garment) => transformGarment (garment));
      }),
      tap(() => this.loadingService.hideLoading())
    )
  };

  public getGarmentsDetail(id: string): Observable<Garment> {
    this.loadingService.showLoading();
    return this.apiGarmentsService.getApiGarmentDetail(id).pipe(
      map((ApiGarment) => {
        return transformGarment(ApiGarment);
      }),
      tap(() => this.loadingService.hideLoading())
    )
  }






}
