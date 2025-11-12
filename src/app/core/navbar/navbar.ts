import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Auth } from '../../shared/services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public auth: Auth) {
   }
}
