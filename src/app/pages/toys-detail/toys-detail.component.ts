import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ToysService } from './../../core/services/toys/toys.service';
import { ToysInterface } from './../../core/services/toys/models/toys.models';
import { Product } from 'src/app/core/services/products/models/product.models';


@Component({
  selector: 'app-toys-detail',
  templateUrl: './toys-detail.component.html',
  styleUrls: ['./toys-detail.component.scss'],
})
export class ToysDetailComponent {
  
  //public toy?: ToysInterface;
  public product?: Product;

  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private toysService: ToysService,
  // ) {
  //   this.activatedRoute.params.subscribe((params) => {
  //     const toyId = params['id'];
  //     this.toysService.getToysDetail(toyId).subscribe((toy) => {
  //       this.toy = toy;
  //     });
  //   });
  // }
}
