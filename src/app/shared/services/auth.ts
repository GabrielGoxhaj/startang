import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  authenticationJwtHeader = new HttpHeaders({
    'content-type': 'application/json',
    'responseType': 'text',
  })

  SetJwtInfo(isLogged:boolean, token:string='') 
  {
    if(isLogged){
      this.authenticationJwtHeader = this.authenticationJwtHeader.set('Authorization', `Bearer ${token}`);
    }
  }
}
