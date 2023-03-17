import { Injectable } from '@angular/core';
import { ApiBooksService } from './api/api-books.service';
import { Observable, map } from 'rxjs';
import { ApiBook } from './api/models/api-book.models';
import { Book } from './models/book.models';
import { transformBook } from './books.helpers';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private apiBooksService: ApiBooksService
  ) { }

  public getBooks(): Observable<Book[]> {
    return this.apiBooksService.getApiBooks().pipe(
      map((books: ApiBook[]) =>{
        return books.map((book) => transformBook(book));
      })
    )
  };

  public getBooksDetail(id: string): Observable<Book> {
    return this.apiBooksService.getApiBookDetail(id).pipe(
      map((apiBook) => {
        return transformBook(apiBook);
      })
    )
  }
}
