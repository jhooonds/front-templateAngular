import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Estado } from 'app/model/estado';
import { HttpModule } from '@angular/http';
import { Constantes } from 'app/util/constantes';

const apiUrl = Constantes.API_ENDPOINT + 'estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  getEstados (): Observable<Estado[]> {
    return this.http.get<Estado[]>(apiUrl)
      .pipe(
        tap(estados => console.log('leu os estados')),
        catchError(this.handleError('getEstados', []))
      );
  }

  getEstado(id: number): Observable<Estado> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Estado>(url).pipe(
      tap(_ => console.log(`leu o estado id=${id}`)),
      catchError(this.handleError<Estado>(`getEstado id=${id}`))
    );
  }

  addEstado (estado: Estado): Observable<Estado> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(estado))
    };
    const body = new FormData().append('dado', JSON.stringify(estado));
    return this.http.post<Estado>(apiUrl, body, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((estado: Estado) => console.log(`adicionou o estado com w/ id=${estado.id}`)),
      catchError(this.handleError<Estado>('addEstado'))
    );
  }

  updateEstado(estado: Estado): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(estado))
    };
    const body = new FormData().append('dado', JSON.stringify(estado));
    return this.http.put(apiUrl, body, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${estado.id}`)),
      catchError(this.handleError<any>('updateEstado'))
    );
  }

  deleteEstado (estado: Estado): Observable<Estado> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(estado))
    };
    const url = `${apiUrl}/${estado.id}`;

    return this.http.delete<Estado>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o estado com id=${estado.id}`)),
      catchError(this.handleError<Estado>('deleteEstado'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
