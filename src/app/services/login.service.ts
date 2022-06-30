import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { urlSerasaBFF } from 'src/environments/environment';
import { Login } from '../models/login';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  baseUrlApiLoginSerasa = urlSerasaBFF

constructor(private http: HttpClient) { }

consultaLogin(user: string, password: string): Observable<Login>{
  return this.http.get<Login>(`${this.baseUrlApiLoginSerasa}/login?user=${user}&password=${password}`)
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
