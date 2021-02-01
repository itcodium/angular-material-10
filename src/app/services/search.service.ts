import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' }) // 
// https://stackblitz.com/angular/xamekgjagrga?file=src%2Fapp%2Fmodel%2Fhero.service.ts
export class SearchService {
  private api = 'https://api.jikan.moe/v3/search/anime?limit=12';
  constructor(private http: HttpClient) {
  }

  search(filter): Observable<object[]> {
    const url = `${this.api}&q=${filter}`;
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

