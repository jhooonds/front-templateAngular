import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Amostra } from 'app/model/amostra';
import { HttpModule } from '@angular/http';

const apiUrl = 'http://localhost:8080/MyLab/api/amostra';

@Injectable({
  providedIn: 'root'
})
export class AmostraService {

  constructor(private http: HttpClient) { }

  getAmostras (): Observable<Amostra[]> {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    };
    return this.http.get<Amostra[]>(apiUrl)
      .pipe(
        tap(amostras => console.log('leu os amostras')),
        catchError(this.handleError('getAmostras', []))
      );
  }

  getAmostra(id: number): Observable<Amostra> {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    };
    const url = `${apiUrl}/${id}`;
    return this.http.get<Amostra>(url).pipe(
      tap(_ => console.log(`leu o amostra id=${id}`)),
      catchError(this.handleError<Amostra>(`getAmostra id=${id}`))
    );
  }

  addAmostra (amostra: Amostra): Observable<Amostra> {
    console.log(JSON.stringify(amostra));
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(amostra))
    };
    
    return this.http.post<Amostra>(apiUrl, amostra, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((amostra: Amostra) => console.log(`adicionou o amostra com w/ id=${amostra.id}`)),
      catchError(this.handleError<Amostra>('addAmostra'))
    );
  }

  updateAmostra(amostra: Amostra): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(amostra))
    };
    return this.http.put(apiUrl, amostra, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${amostra.id}`)),
      catchError(this.handleError<any>('updateAmostra'))
    );
  }

  deleteAmostra (amostra: Amostra): Observable<Amostra> {
    let httpOptions = {
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
