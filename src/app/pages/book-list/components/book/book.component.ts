import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/core/services/books/models/book.models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() public book?: Book;

  constructor(private router: Router){}

  public navigateToDetail() {
    if(this.book) {
      this.router.navigate(['detail', this.book._id])
    }
  }



}
