import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ParentComponent } from './app/feature/parent-component/parent-component'

bootstrapApplication(ParentComponent, appConfig)
  .catch((err) => console.error(err));
