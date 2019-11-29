import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Amostra } from 'app/model/medicao';
import { HttpModule } from '@angular/http';

const apiUrl = 'http://localhost:8080/MyLab/api/medicao';

@Injectable({
  providedIn: 'root'
})
export class AmostraService {

  constructor(private http: HttpClient) { }

  getAmostras (): Observable<Amostra[]> {
    return this.http.get<Amostra[]>(apiUrl)
      .pipe(
        tap(medicaos => console.log('leu os medicaos')),
        catchError(this.handleError('getAmostras', []))
      );
  }

  getAmostra(id: number): Observable<Amostra> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Amostra>(url).pipe(
      tap(_ => console.log(`leu o medicao id=${id}`)),
      catchError(this.handleError<Amostra>(`getAmostra id=${id}`))
    );
  }

  addAmostra (medicao: Amostra): Observable<Amostra> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(medicao))
    };
    const body = new FormData().append('dado', JSON.stringify(medicao));
    return this.http.post<Amostra>(apiUrl, body, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((medicao: Amostra) => console.log(`adicionou o medicao com w/ id=${medicao.id}`)),
      catchError(this.handleError<Amostra>('addAmostra'))
    );
  }

  updateAmostra(medicao: Amostra): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(medicao))
    };
    const body = new FormData().append('dado', JSON.stringify(medicao));
    return this.http.put(apiUrl, body, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${medicao.id}`)),
      catchError(this.handleError<any>('updateAmostra'))
    );
  }

  deleteAmostra (medicao: Amostra): Observable<Amostra> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(medicao))
    };
    const url = `${apiUrl}/${medicao.id}`;

    return this.http.delete<Amostra>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o medicao com id=${medicao.id}`)),
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
