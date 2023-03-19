import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/core/services/books/books.service';
import { Book } from 'src/app/core/services/books/models/book.models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  page: number = 1;
  public book?: Book;
  public books: Book[] = [];

  constructor(
    private router: Router,
    private booksService: BooksService
  ) {}

  public ngOnInit(): void {
    this.booksService.getBooks().subscribe((booksFromApi) => {
      this.books = booksFromApi;
    })
  }

}
