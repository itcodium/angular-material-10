import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private api = 'https://api.jikan.moe/v3/search/anime?limit=4';

  constructor(private http: HttpClient) { }

  search(filter: string): Observable<object[]> {
    let url = this.api + "&q=" + filter;
    console.log("url", url)
    return this.http.get<object[]>(url).pipe(
      catchError(this.handleError('search', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(error as T);
    };
  }
}
