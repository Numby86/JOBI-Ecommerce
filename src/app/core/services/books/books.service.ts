import { LoadingService } from './../loading/loading.service';
import { Injectable } from '@angular/core';
import { ApiBooksService } from './api/api-books.service';
import { Observable, map, tap } from 'rxjs';
import { ApiBook } from './api/models/api-book.models';
import { Book } from './models/book.models';
import { transformBook } from './books.helpers';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private apiBooksService: ApiBooksService,
    private loadingService: LoadingService
  ) { }

  public getBooks(): Observable<Book[]> {
    this.loadingService.showLoading();
    return this.apiBooksService.getApiBooks().pipe(
      map((books: ApiBook[]) =>{
        return books.map((book) => transformBook(book));
      }),
      tap(() => this.loadingService.hideLoading())
    )
  };

  public getBooksDetail(id: string): Observable<Book> {
    this.loadingService.showLoading();
    return this.apiBooksService.getApiBookDetail(id).pipe(
      map((apiBook) => {
        return transformBook(apiBook);
      }),
      tap(() => this.loadingService.hideLoading())
    )
  }
}
