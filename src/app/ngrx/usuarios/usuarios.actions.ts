
import { createAction, props } from '@ngrx/store';

export const cargarUsuarios = createAction(
   "[Usuarios] Cargar Usuarios"
)

export const cargarUsuariosExitoso = createAction(
   "[Usuarios] Cargar Usuarios Exitoso",
   props<{ usuarios: any[] }>()
)

export const cargarUsuariosError = createAction(
   "[Usuarios] Cargar Usuarios Error",
   props<{ error: any }>()
)
