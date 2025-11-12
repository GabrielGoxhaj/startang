import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Navbar } from './app/core/navbar/navbar';
import { Login } from './app/core/login/login';

bootstrapApplication(Navbar, appConfig)
  .catch((err) => console.error(err));
