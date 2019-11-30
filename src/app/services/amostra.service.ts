import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Amostra } from 'app/model/amostra';
import { HttpModule } from '@angular/http';
import { Constantes } from 'app/util/constantes';

const apiUrl = Constantes.API_ENDPOINT + 'amostra';

@Injectable({
  providedIn: 'root'
})
export class AmostraService {

  constructor(private http: HttpClient) { }

  getAmostras (): Observable<Amostra[]> {
    return this.http.get<Amostra[]>(apiUrl)
      .pipe(
        tap(amostras => console.log('leu os amostras')),
        catchError(this.handleError('getAmostras', []))
      );
  }

  getAmostra(id: number): Observable<Amostra> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Amostra>(url).pipe(
      tap(_ => console.log(`leu o amostra id=${id}`)),
      catchError(this.handleError<Amostra>(`getAmostra id=${id}`))
    );
  }

  addAmostra (amostra: Amostra): Observable<Amostra> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(amostra))
    };
    const body = new FormData().append('dado', JSON.stringify(amostra));
    return this.http.post<Amostra>(apiUrl, body, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((amostra: Amostra) => console.log(`adicionou o amostra com w/ id=${amostra.id}`)),
      catchError(this.handleError<Amostra>('addAmostra'))
    );
  }

  updateAmostra(amostra: Amostra): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(amostra))
    };
    const body = new FormData().append('dado', JSON.stringify(amostra));
    return this.http.put(apiUrl, body, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${amostra.id}`)),
      catchError(this.handleError<any>('updateAmostra'))
    );
  }

  deleteAmostra (amostra: Amostra): Observable<Amostra> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(amostra))
    };
    const url = `${apiUrl}/${amostra.id}`;

    return this.http.delete<Amostra>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o amostra com id=${amostra.id}`)),
      catchError(this.handleError<Amostra>('deleteAmostra'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
