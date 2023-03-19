import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToysInterface } from './../../../../core/services/toys/models/toys.models';

@Component({
  selector: 'app-toy',
  templateUrl: './toy.component.html',
  styleUrls: ['./toy.component.scss'],
})
export class ToyComponent {
  @Input() public toy?: ToysInterface;

  constructor(private router: Router) {}

  public showMore() {
    if (this.toy) {
      this.router.navigate(['toysDetail', this.toy._id]);
    }
  }
}
