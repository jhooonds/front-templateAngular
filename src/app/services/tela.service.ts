import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Tela } from 'app/model/tela';
import { HttpModule } from '@angular/http';
import { Constantes } from 'app/util/constantes';

const apiUrl = Constantes.API_ENDPOINT + 'tela';

@Injectable({
  providedIn: 'root'
})
export class TelaService {

  constructor(private http: HttpClient) { }

  getTelas (): Observable<Tela[]> {
    return this.http.get<Tela[]>(apiUrl)
      .pipe(
        tap(telas => console.log('leu os telas')),
        catchError(this.handleError('getTelas', []))
      );
  }

  getTela(id: number): Observable<Tela> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Tela>(url).pipe(
      tap(_ => console.log(`leu o tela id=${id}`)),
      catchError(this.handleError<Tela>(`getTela id=${id}`))
    );
  }

  addTela (tela: Tela): Observable<Tela> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(tela))
    };
    const body = new FormData().append('dado', JSON.stringify(tela));
    return this.http.post<Tela>(apiUrl, body, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((tela: Tela) => console.log(`adicionou o tela com w/ id=${tela.id}`)),
      catchError(this.handleError<Tela>('addTela'))
    );
  }

  updateTela(tela: Tela): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(tela))
    };
    const body = new FormData().append('dado', JSON.stringify(tela));
    return this.http.put(apiUrl, body, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${tela.id}`)),
      catchError(this.handleError<any>('updateTela'))
    );
  }

  deleteTela (tela: Tela): Observable<Tela> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(tela))
    };
    const url = `${apiUrl}/${tela.id}`;

    return this.http.delete<Tela>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o tela com id=${tela.id}`)),
      catchError(this.handleError<Tela>('deleteTela'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
