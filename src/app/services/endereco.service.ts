import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Endereco } from 'app/model/endereco';
import { HttpModule } from '@angular/http';
import { Constantes } from 'app/util/constantes';

const apiUrl = Constantes.API_ENDPOINT + 'endereco'

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getEnderecos (): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(apiUrl)
      .pipe(
        tap(enderecos => console.log('leu os enderecos')),
        catchError(this.handleError('getEnderecos', []))
      );
  }

  getEndereco(id: number): Observable<Endereco> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Endereco>(url).pipe(
      tap(_ => console.log(`leu o endereco id=${id}`)),
      catchError(this.handleError<Endereco>(`getEndereco id=${id}`))
    );
  }

  addEndereco (endereco: Endereco): Observable<Endereco> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(endereco))
    };
    const body = new FormData().append('dado', JSON.stringify(endereco));
    return this.http.post<Endereco>(apiUrl, body, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((endereco: Endereco) => console.log(`adicionou o endereco com w/ id=${endereco.id}`)),
      catchError(this.handleError<Endereco>('addEndereco'))
    );
  }

  updateEndereco(endereco: Endereco): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(endereco))
    };
    const body = new FormData().append('dado', JSON.stringify(endereco));
    return this.http.put(apiUrl, body, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${endereco.id}`)),
      catchError(this.handleError<any>('updateEndereco'))
    );
  }

  deleteEndereco (endereco: Endereco): Observable<Endereco> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(endereco))
    };
    const url = `${apiUrl}/${endereco.id}`;

    return this.http.delete<Endereco>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o endereco com id=${endereco.id}`)),
      catchError(this.handleError<Endereco>('deleteEndereco'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
