import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  public showLoader$?:Observable<boolean>;

constructor(
  private loadingService: LoadingService
){ }

public ngOnInit(): void {
    this.showLoader$ = this.loadingService.shouldShowLoader$;
}

}
