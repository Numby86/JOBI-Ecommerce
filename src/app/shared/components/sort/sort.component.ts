import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {

  @Input() public price?: string;

  public sort(value: string){
    this.price = value;
    console.log(this.price);
  }
}
