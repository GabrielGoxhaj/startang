import { Component } from '@angular/core';
import { Auth } from '../../shared/services/auth';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  constructor(public auth: Auth) { }
}
