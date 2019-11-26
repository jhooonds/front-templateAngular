import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { PerfilAcesso } from 'app/model/perfil-acesso';
import { HttpModule } from '@angular/http';

const apiUrl = 'http://localhost:8080/MyLab/api/perfilAcesso';

@Injectable({
  providedIn: 'root'
})
export class PerfilAcessoService {

  constructor(private http: HttpClient) { }

  getPerfilAcessos (): Observable<PerfilAcesso[]> {
    return this.http.get<PerfilAcesso[]>(apiUrl)
      .pipe(
        tap(perfilAcessos => console.log('leu os perfilAcessos')),
        catchError(this.handleError('getPerfilAcessos', []))
      );
  }

  getPerfilAcesso(id: number): Observable<PerfilAcesso> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<PerfilAcesso>(url).pipe(
      tap(_ => console.log(`leu o perfilAcesso id=${id}`)),
      catchError(this.handleError<PerfilAcesso>(`getPerfilAcesso id=${id}`))
    );
  }

  addPerfilAcesso (perfilAcesso: PerfilAcesso): Observable<PerfilAcesso> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(perfilAcesso))
    };
    return this.http.post<PerfilAcesso>(apiUrl, perfilAcesso, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((perfilAcesso: PerfilAcesso) => console.log(`adicionou o perfilAcesso com w/ id=${perfilAcesso.id}`)),
      catchError(this.handleError<PerfilAcesso>('addPerfilAcesso'))
    );
  }

  updatePerfilAcesso(perfilAcesso: PerfilAcesso): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(perfilAcesso))
    };
    return this.http.put(apiUrl, perfilAcesso, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${perfilAcesso.id}`)),
      catchError(this.handleError<any>('updatePerfilAcesso'))
    );
  }

  deletePerfilAcesso (perfilAcesso: PerfilAcesso): Observable<PerfilAcesso> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(perfilAcesso))
    };
    const url = `${apiUrl}/${perfilAcesso.id}`;

    return this.http.delete<PerfilAcesso>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o perfilAcesso com id=${perfilAcesso.id}`)),
      catchError(this.handleError<PerfilAcesso>('deletePerfilAcesso'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
