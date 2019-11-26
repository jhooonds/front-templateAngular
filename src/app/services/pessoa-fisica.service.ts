import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { PessoaFisica } from 'app/model/pessoa-fisica';
import { HttpModule } from '@angular/http';

const apiUrl = 'http://localhost:8080/MyLab/api/pessoaFisica';

@Injectable({
  providedIn: 'root'
})
export class PessoaFisicaService {

  constructor(private http: HttpClient) { }

  getPessoaFisicas (): Observable<PessoaFisica[]> {
    return this.http.get<PessoaFisica[]>(apiUrl)
      .pipe(
        tap(pessoaFisicas => console.log('leu os pessoaFisicas')),
        catchError(this.handleError('getPessoaFisicas', []))
      );
  }

  getPessoaFisica(id: number): Observable<PessoaFisica> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<PessoaFisica>(url).pipe(
      tap(_ => console.log(`leu o pessoaFisica id=${id}`)),
      catchError(this.handleError<PessoaFisica>(`getPessoaFisica id=${id}`))
    );
  }

  addPessoaFisica (pessoaFisica: PessoaFisica): Observable<PessoaFisica> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(pessoaFisica))
    };
    return this.http.post<PessoaFisica>(apiUrl, pessoaFisica, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((pessoaFisica: PessoaFisica) => console.log(`adicionou o pessoaFisica com w/ id=${pessoaFisica.id}`)),
      catchError(this.handleError<PessoaFisica>('addPessoaFisica'))
    );
  }

  updatePessoaFisica(pessoaFisica: PessoaFisica): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(pessoaFisica))
    };
    return this.http.put(apiUrl, pessoaFisica, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${pessoaFisica.id}`)),
      catchError(this.handleError<any>('updatePessoaFisica'))
    );
  }

  deletePessoaFisica (pessoaFisica: PessoaFisica): Observable<PessoaFisica> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(pessoaFisica))
    };
    const url = `${apiUrl}/${pessoaFisica.id}`;

    return this.http.delete<PessoaFisica>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o pessoaFisica com id=${pessoaFisica.id}`)),
      catchError(this.handleError<PessoaFisica>('deletePessoaFisica'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
