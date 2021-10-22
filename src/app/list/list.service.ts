import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { List } from '../interface/list';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private _search$ = new Subject<any>();

  listUrl =
    'https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  getList(): Observable<List> {
    return this.http.get<List>(this.listUrl).pipe(catchError(this.handleError));
  }
}
