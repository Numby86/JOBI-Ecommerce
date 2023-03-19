import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public shouldShowLoader$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor() { 

    this.shouldShowLoader$.next(false);
  }

  public showLoading() {
    this.shouldShowLoader$.next(true);
  }

  public hideLoading() {
    this.shouldShowLoader$.next(false);
  }

}
