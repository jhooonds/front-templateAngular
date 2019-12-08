import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Medicao } from 'app/model/medicao';
import { HttpModule } from '@angular/http';
import { Constantes } from 'app/util/constantes';

const apiUrl = Constantes.API_ENDPOINT + 'medicao';

@Injectable({
  providedIn: 'root'
})
export class MedicaoService {

  constructor(private http: HttpClient) { }

  getMedicaos (): Observable<Medicao[]> {
    return this.http.get<Medicao[]>(apiUrl)
      .pipe(
        tap(medicaos => console.log('leu os medicaos')),
        catchError(this.handleError('getMedicaos', []))
      );
  }

  getCustomMedicaos (type: String, id: String): Observable<Medicao[]> {
    return this.http.get<Medicao[]>(apiUrl+"/"+type+"/"+id)
      .pipe(
        tap(medicaos => console.log('leu os medicaos')),
        catchError(this.handleError('getMedicaos', []))
      );
  }

  getLimitMedicaos (size: number): Observable<Medicao[]> {
    return this.http.get<Medicao[]>(apiUrl+"/limit/"+size)
      .pipe(
        tap(medicaos => console.log('leu os medicaos')),
        catchError(this.handleError('getMedicaos', []))
      );
  }



  getWeekMedicoes (): Observable<any[]> {
    return this.http.get<any[]>(apiUrl+"/week")
      .pipe(
        tap(medicaos => console.log('leu os medicaos')),
        catchError(this.handleError('getMedicaos', []))
      );
  }

  getAmostraSemMedicoes (): Observable<any[]> {
    return this.http.get<any[]>(apiUrl+"/amostra-med")
      .pipe(
        tap(medicaos => console.log('leu os medicaos')),
        catchError(this.handleError('getMedicaos', []))
      );
  }

  getAmostraThisMonth (): Observable<any[]> {
    return this.http.get<any[]>(apiUrl+"/amostra-month")
      .pipe(
        tap(medicaos => console.log('leu os medicaos')),
        catchError(this.handleError('getMedicaos', []))
      );
  }

  getClienteMaxMedicao (): Observable<any[]> {
    return this.http.get<any[]>(apiUrl+"/max-cliente-med")
      .pipe(
        tap(medicaos => console.log('leu os medicaos')),
        catchError(this.handleError('getMedicaos', []))
      );
  }

  getMonthMedicoes (): Observable<any[]> {
    return this.http.get<any[]>(apiUrl+"/month")
      .pipe(
        tap(medicaos => console.log('leu os medicaos')),
        catchError(this.handleError('getMedicaos', []))
      );
  }

  getYearMedicoes (): Observable<any[]> {
    return this.http.get<any[]>(apiUrl+"/year")
      .pipe(
        tap(medicaos => console.log('leu os medicaos')),
        catchError(this.handleError('getMedicaos', []))
      );
  }

  getMedicao(id: number): Observable<Medicao> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Medicao>(url).pipe(
      tap(_ => console.log(`leu o medicao id=${id}`)),
      catchError(this.handleError<Medicao>(`getMedicao id=${id}`))
    );
  }

  addMedicao (medicao: Medicao): Observable<Medicao> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(medicao))
    };
    const body = new FormData().append('dado', JSON.stringify(medicao));
    return this.http.post<Medicao>(apiUrl, body, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((medicao: Medicao) => console.log(`adicionou o medicao com w/ id=${medicao.id}`)),
      catchError(this.handleError<Medicao>('addMedicao'))
    );
  }

  updateMedicao(medicao: Medicao): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(medicao))
    };
    const body = new FormData().append('dado', JSON.stringify(medicao));
    return this.http.put(apiUrl, body, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${medicao.id}`)),
      catchError(this.handleError<any>('updateMedicao'))
    );
  }

  deleteMedicao (medicao: Medicao): Observable<Medicao> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(medicao))
    };
    const url = `${apiUrl}/${medicao.id}`;

    return this.http.delete<Medicao>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o medicao com id=${medicao.id}`)),
      catchError(this.handleError<Medicao>('deleteMedicao'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
