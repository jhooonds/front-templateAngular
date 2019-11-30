import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Equipamento } from 'app/model/equipamento';
import { HttpModule } from '@angular/http';
import { Constantes } from 'app/util/constantes';

const apiUrl = Constantes.API_ENDPOINT + 'equipamento';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  constructor(private http: HttpClient) { }

  getEquipamentos (): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(apiUrl)
      .pipe(
        tap(equipamentos => console.log('leu os equipamentos')),
        catchError(this.handleError('getEquipamentos', []))
      );
  }

  getEquipamento(id: number): Observable<Equipamento> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Equipamento>(url).pipe(
      tap(_ => console.log(`leu o equipamento id=${id}`)),
      catchError(this.handleError<Equipamento>(`getEquipamento id=${id}`))
    );
  }

  addEquipamento (equipamento: Equipamento): Observable<Equipamento> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(equipamento))
    };
    const body = new FormData().append('dado', JSON.stringify(equipamento));
    return this.http.post<Equipamento>(apiUrl, body, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((equipamento: Equipamento) => console.log(`adicionou o equipamento com w/ id=${equipamento.id}`)),
      catchError(this.handleError<Equipamento>('addEquipamento'))
    );
  }

  updateEquipamento(equipamento: Equipamento): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(equipamento))
    };
    const body = new FormData().append('dado', JSON.stringify(equipamento));
    return this.http.put(apiUrl, body, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${equipamento.id}`)),
      catchError(this.handleError<any>('updateEquipamento'))
    );
  }

  deleteEquipamento (equipamento: Equipamento): Observable<Equipamento> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      params: new HttpParams().append('dado', JSON.stringify(equipamento))
    };
    const url = `${apiUrl}/${equipamento.id}`;

    return this.http.delete<Equipamento>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o equipamento com id=${equipamento.id}`)),
      catchError(this.handleError<Equipamento>('deleteEquipamento'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
