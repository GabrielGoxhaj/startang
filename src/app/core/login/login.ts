import { Component } from '@angular/core';
import { Httprequest } from '../../shared/services/httprequest';
import { Credentials } from '../../shared/services/models/credentials';
import * as jwt_decode from 'jwt-decode';
import { HttpStatusCode } from '@angular/common/http';
import { Auth } from '../../shared/services/auth';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  credentials: Credentials = new Credentials('', '');
  jwtToken: any;
  jwtTokenPayload: any;
  flashMessage: string = '';
credentialsReturn: Credentials = new Credentials('', '');
  constructor(private http: Httprequest, private auth: Auth, private cookies: CookieService) { }
  LoginBE(usr: HTMLInputElement, pwd: HTMLInputElement) {
    if (usr.value != "" && pwd.value != "") {
      this.credentials.username = usr.value;
      this.credentials.password = pwd.value;

      this.http.PostLogin(this.credentials).subscribe({
        next: (response) => {
          switch (response.status) {
            case HttpStatusCode.Ok:
              console.log('Login successful:', response);
              this.flashMessage = this.cookies.get('flashMessage');
              this.credentialsReturn.username = 
              JSON.parse(this.cookies.get('flashMessage')).username;
              this.credentialsReturn.password = 
              JSON.parse(this.cookies.get('flashMessage')).password;
              console.log('Credentials from cookie:', this.credentialsReturn);
              console.log('Flash Message from cookie:', this.flashMessage);
              this.cookies.delete('flashMessage');
              this.jwtToken = response.body?.token;
              this.jwtTokenPayload = jwt_decode.jwtDecode(this.jwtToken);
              this.auth.SetJwtInfo(true, this.jwtToken);
              console.log('Decoded JWT payload:', this.jwtTokenPayload);
              console.log('User ID from token:', this.jwtTokenPayload.userId);
              console.log('Username from token:', this.jwtTokenPayload.unique_name);
              console.log('Expiration from token:', this.jwtTokenPayload.exp);
              console.log('Issuer from token:', this.jwtTokenPayload.iss);
              console.log('Audience from token:', this.jwtTokenPayload.aud);
              break;
            case HttpStatusCode.Unauthorized:
              console.error('Login failed: Unauthorized');
              break;
            default:
              console.error('Login failed with status:', response.status);
              break;
          }
        },
        error: (err) => {
          console.error('Error during login:', err);
        }
      });
    } else {
      alert("Credenziali Errate!");
    }
  }
}
