import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  constructor(private http: HttpClient) { }
  // post<T>(arg0: string) {
  //     throw new Error('Method not implemented.');
  // }


  post<T>(url: string, options?: any) {
    return this.http.post( url, options );
  }
  get<T>(url: string, options?: any) {
    return this.http.get<T>(url, options);
  }
  put<T>(url: string, options?: any): Observable<any> {
    return this.http.put( url, options);
  }


  // ******************** Surya***************
  private apiUrl = `${environment.apiUrl}/users`;

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // };

  getUsers() {
    return this.http.get(`${this.apiUrl}`)
    // .pipe(
    //   catchError(this.handleError('getUsers', null))
    // )
  }

  // ******************** Surya***************
}
