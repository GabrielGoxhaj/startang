import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Navbar } from './app/core/navbar/navbar';

bootstrapApplication(Navbar, appConfig)
  .catch((err) => console.error(err));
