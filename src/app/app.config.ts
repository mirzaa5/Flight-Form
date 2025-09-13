import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
/* Firebase */
import { provideFirebaseApp, initializeApp} from '@angular/fire/app';
import { provideAuth, getAuth} from '@angular/fire/auth';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),

    //Firebase
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(()=> getAuth())
  ]
};
