import { Injectable } from '@angular/core';
import { ApiGarmentsService } from './api/api-garments.service';
import { Observable, map } from 'rxjs';
import { ApiGarment } from './api/models/api-garment.models';
import { Garment } from './models/garment.models';
import { transformGarment} from './garments.helpers'


@Injectable({
  providedIn: 'root'
})
export class GarmentsService {

  constructor(
    private apiGarmentsService: ApiGarmentsService
  ) { }

  public getGarments(): Observable<Garment[]> {
    return this.apiGarmentsService.getApiGarments().pipe(
      map((garments: ApiGarment[]) =>{
        return garments.map((garment) => transformGarment (garment));
      })
    )
  };

  public getGarmentsDetail(id: string): Observable<Garment> {
    return this.apiGarmentsService.getApiGarmentDetail(id).pipe(
      map((ApiGarment) => {
        return transformGarment(ApiGarment);
      })
    )
  }






}
