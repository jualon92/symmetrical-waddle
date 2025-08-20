import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/contador/contador.reducer';
 
import { provideEffects } from '@ngrx/effects'; 
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './ngrx/auth/auth.reducer';
import { UsuariosEffects } from './ngrx/usuarios/usuarios.effects';
import { provideHttpClient } from '@angular/common/http';
import { usuariosReducer } from './ngrx/usuarios/usuarios.reducer';
 
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ count: counterReducer, auth: authReducer, usuarios: usuariosReducer }),
    provideEffects([UsuariosEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
