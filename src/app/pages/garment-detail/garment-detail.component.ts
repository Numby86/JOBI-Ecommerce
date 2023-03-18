import { Garment } from 'src/app/core/services/garments/models/garment.models';
import { Component } from '@angular/core';
import { GarmentsService } from 'src/app/core/services/garments/garments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-garment-detail',
  templateUrl: './garment-detail.component.html',
  styleUrls: ['./garment-detail.component.scss']
})
export class GarmentDetailComponent {

    public garment?: Garment;

    constructor (
      private activatedRoute: ActivatedRoute,
      private garmentsService: GarmentsService
    ){
      this.activatedRoute.params.subscribe((params) => {
        const garmentId = params['id'];
        this.garmentsService.getGarmentsDetail(garmentId).subscribe((garment) => {
          this.garment = garment
        })
      })
    }

}
