import { ApiToysInterface } from './api/models/api-toys.models';
import { ToysInterface } from './models/toys.models';
import { ApiToysService } from './api/api-toys.service';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { transfToy } from './toys.helpers';

@Injectable({
  providedIn: 'root',
})
export class ToysService {
  constructor(private ApiToysService: ApiToysService) {}

  public getToys(): Observable<ToysInterface[]> {
    return this.ApiToysService.getApiToys().pipe(
      map((toys: ApiToysInterface[]) => {
        return toys.map((toy) => transfToy(toy));
      })
    );
  }

  public getToysDetail(id: string): Observable<ToysInterface> {
    return this.ApiToysService.getApiToysDetail(id).pipe(
      map((toy) => {
        return transfToy(toy);
      })
    );
  }
}
