import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cliente } from 'app/model/cliente';
import { HttpModule } from '@angular/http';
import { Constantes } from 'app/util/constantes';

const apiUrl = Constantes.API_ENDPOINT + 'cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes (): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(apiUrl)
      .pipe(
        tap(clientes => console.log('leu os clientes')),
        catchError(this.handleError('getClientes', []))
      );
  }

  getCliente(id: number): Observable<Cliente> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      tap(_ => console.log(`leu o cliente id=${id}`)),
      catchError(this.handleError<Cliente>(`getCliente id=${id}`))
    );
  }

  addCliente (cliente: Cliente): Observable<Cliente> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(cliente))
    };
    const body = new FormData().append('dado', JSON.stringify(cliente));
    return this.http.post<Cliente>(apiUrl, body, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((cliente: Cliente) => console.log(`adicionou o cliente com w/ id=${cliente.id}`)),
      catchError(this.handleError<Cliente>('addCliente'))
    );
  }

  updateCliente(cliente: Cliente): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(cliente))
    };
    const body = new FormData().append('dado', JSON.stringify(cliente));
    return this.http.put(apiUrl, body, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${cliente.id}`)),
      catchError(this.handleError<any>('updateCliente'))
    );
  }

  deleteCliente (cliente: Cliente): Observable<Cliente> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(cliente))
    };
    const url = `${apiUrl}/${cliente.id}`;

    return this.http.delete<Cliente>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o cliente com id=${cliente.id}`)),
      catchError(this.handleError<Cliente>('deleteCliente'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
