import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {

  @Input() public price?: string;

  @Output() public sort: EventEmitter<void> = new EventEmitter<void>();

  public sortOut(){
    this.sort.emit()
  }

}
