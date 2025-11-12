import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from './models/credentials';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class Httprequest {
  constructor(private http: HttpClient,private auth: Auth) { }

  GetCust(): Observable<any> {
    return this.http.get('https://localhost:7238/api/Customers', { headers: this.auth.authenticationJwtHeader });
  }

  GetCustomerDetail(id: number): Observable<any> {
    return this.http.get(`https://localhost:7238/api/Customers/${id}`);
  }

  PostLogin(credentials: Credentials): Observable<any> {
    return this.http.post('https://localhost:7238/api/login', credentials  ,{ observe: 'response' });
  }
}
