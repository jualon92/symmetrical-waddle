
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as UsuariosActions from './usuarios.actions';

@Injectable()
export class UsuariosEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  // 🚀 Effect que intercepta la acción cargarUsuarios
  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsuariosActions.cargarUsuarios),           // 👂 Escucha la acción cargarUsuarios
      switchMap(() =>                                   // 🔄 Ejecuta petición HTTP
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
          map(usuarios => {
            // ✅ Si la petición es exitosa
            console.log('🎉 Usuarios cargados exitosamente:', usuarios);
            
            // Despachar acción cargarUsuariosExitoso con los datos obtenidos
            return UsuariosActions.cargarUsuariosExitoso({ usuarios });
          }),
          catchError(error => {
            // ❌ Si hay error en la petición
            console.error('💥 Error al cargar usuarios:', error);
            
            // Despachar acción cargarUsuariosError si ocurre un error
            return of(UsuariosActions.cargarUsuariosError({ 
              error: error.message || 'Error al cargar usuarios'
            }));
          })
        )
      )
    )
  );
}