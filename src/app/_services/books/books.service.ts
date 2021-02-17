import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BooksModel } from 'src/app/_models/books.model';
import { environment } from 'src/environments/environment';
import { handleError } from '../_helper/handle-error-helper.service';
import { HttpHelperService } from '../_helper/http-helper.service';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(
    private http: HttpClient,
    private httpHelper: HttpHelperService
  ) {}

  getAll(page: number) {
    const options = { headers: this.httpHelper.resolveUserRequestHeader() };
    return this.http
      .get<BooksModel>(
        `${environment.apiUrl}/books?page=${page}&amount=12`,
        options
      )
      .pipe(catchError(handleError));
  }
}
