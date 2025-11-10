import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Httprequest {
  constructor(private http: HttpClient) { }

  GetCust(): Observable<any> {
    return this.http.get('https://localhost:7238/api/Customers');
  }

  GetCustomerDetail(id: number): Observable<any> {
    return this.http.get(`https://localhost:7238/api/Customers/${id}`);
  }

  PostLogin(credentials: Credentials): Observable<any> {
        return this.http.post(`https://localhost:7238/api/Login`, credentials);
  }
}

