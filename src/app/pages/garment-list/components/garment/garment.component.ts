import { Garment } from 'src/app/core/services/garments/models/garment.models';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-garment',
  templateUrl: './garment.component.html',
  styleUrls: ['./garment.component.scss']
})
export class GarmentComponent {

  @Input() public garment?: Garment;

  constructor(private router: Router){}

  public navigateToDetail() { 
    if(this.garment) {
      this.router.navigate(['detail', this.garment._id])
    }
  }

}
