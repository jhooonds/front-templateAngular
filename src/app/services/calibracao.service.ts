import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Calibracao } from 'app/model/calibracao';
import { HttpModule } from '@angular/http';
import { Constantes } from 'app/util/constantes';

const apiUrl = Constantes.API_ENDPOINT + 'calibracao';

@Injectable({
  providedIn: 'root'
})
export class CalibracaoService {

  constructor(private http: HttpClient) { }

  getCalibracaos (): Observable<Calibracao[]> {
    return this.http.get<Calibracao[]>(apiUrl)
      .pipe(
        tap(calibracaos => console.log('leu os calibracaos')),
        catchError(this.handleError('getCalibracaos', []))
      );
  }

  getCalibracao(id: number): Observable<Calibracao> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Calibracao>(url).pipe(
      tap(_ => console.log(`leu o calibracao id=${id}`)),
      catchError(this.handleError<Calibracao>(`getCalibracao id=${id}`))
    );
  }

  addCalibracao (calibracao: Calibracao): Observable<Calibracao> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(calibracao))
    };
    const body = new FormData().append('dado', JSON.stringify(calibracao));
    return this.http.post<Calibracao>(apiUrl, body, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((calibracao: Calibracao) => console.log(`adicionou o calibracao com w/ id=${calibracao.id}`)),
      catchError(this.handleError<Calibracao>('addCalibracao'))
    );
  }

  updateCalibracao(calibracao: Calibracao): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(calibracao))
    };
    const body = new FormData().append('dado', JSON.stringify(calibracao));
    return this.http.put(apiUrl, body, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${calibracao.id}`)),
      catchError(this.handleError<any>('updateCalibracao'))
    );
  }

  deleteCalibracao (calibracao: Calibracao): Observable<Calibracao> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(calibracao))
    };
    const url = `${apiUrl}/${calibracao.id}`;

    return this.http.delete<Calibracao>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o calibracao com id=${calibracao.id}`)),
      catchError(this.handleError<Calibracao>('deleteCalibracao'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
