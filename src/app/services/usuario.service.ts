import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Usuario } from 'app/model/usuario';
import { HttpModule } from '@angular/http';
import { Constantes } from 'app/util/constantes';

const apiUrl = Constantes.API_ENDPOINT + 'usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios (): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(apiUrl)
      .pipe(
        tap(usuarios => console.log('leu os usuarios')),
        catchError(this.handleError('getUsuarios', []))
      );
  }

  getUsuario(id: number): Observable<Usuario> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Usuario>(url).pipe(
      tap(_ => console.log(`leu o usuario id=${id}`)),
      catchError(this.handleError<Usuario>(`getUsuario id=${id}`))
    );
  }

  getUsuarioForLogin(login: string): Observable<Usuario> {
    const url = `${apiUrl}/login/${login}`;
    return this.http.get<Usuario>(url).pipe(
      tap(_ => console.log(`leu o usuario id=${login}`)),
      catchError(this.handleError<Usuario>(`getUsuario id=${login}`))
    );
  }

  addUsuario (usuario: Usuario): Observable<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(usuario))
    };
    const body = new FormData().append('dado', JSON.stringify(usuario));
    return this.http.post<Usuario>(apiUrl, body, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((usuario: Usuario) => console.log(`adicionou o usuario com w/ id=${usuario.id}`)),
      catchError(this.handleError<Usuario>('addUsuario'))
    );
  }

  updateUsuario(usuario: Usuario): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(usuario))
    };
    const body = new FormData().append('dado', JSON.stringify(usuario));
    return this.http.put(apiUrl, body, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${usuario.id}`)),
      catchError(this.handleError<any>('updateUsuario'))
    );
  }

  deleteUsuario (usuario: Usuario): Observable<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(usuario))
    };
    const url = `${apiUrl}/${usuario.id}`;

    return this.http.delete<Usuario>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuario com id=${usuario.id}`)),
      catchError(this.handleError<Usuario>('deleteUsuario'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
