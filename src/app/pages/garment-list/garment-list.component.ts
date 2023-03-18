import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GarmentsService } from 'src/app/core/services/garments/garments.service';
import { Garment } from 'src/app/core/services/garments/models/garment.models';

@Component({
  selector: 'app-garment-list',
  templateUrl: './garment-list.component.html',
  styleUrls: ['./garment-list.component.scss']
})
export class GarmentListComponent implements OnInit {

  public garment?: Garment;
  public garments: Garment[] = [];
  
  constructor(
    private router :Router,
    private garmentsService: GarmentsService
  ){}

  public ngOnInit(): void {
    this.garmentsService.getGarments().subscribe((garmentsFromApi) => {
      this.garments = garmentsFromApi;
    })  
  }
}
