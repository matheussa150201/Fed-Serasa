import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { urlSerasaBFF } from 'src/environments/environment';
import { Vendedor } from '../models/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  baseUrlApiVendedorSerasa = urlSerasaBFF

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

constructor(private http: HttpClient) { }

listaVendedor(): Observable<Vendedor[]> {
  return this.http
    .get<Vendedor[]>(this.baseUrlApiVendedorSerasa + '/vendedor')
    .pipe(catchError(this.handleError));
}

obterVendedorPorId(id: string): Observable<Vendedor> {
  return this.http
    .get<any>(`${this.baseUrlApiVendedorSerasa}/pesquisa?id=${id}`)
    .pipe(catchError(this.handleError));
}

handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Erro ocorreu no lado do client
    errorMessage = error.error.message;
  } else {
    // Erro ocorreu no lado do servidor
    errorMessage =
      `ERRO SERVIDOR: Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}
