import { createReducer, on } from '@ngrx/store';
import {  initialUsuariosState } from './usuarios.model';
import * as UsuariosActions from './usuarios.actions';

export const usuariosReducer = createReducer(
  initialUsuariosState,
  
  // 🔄 Cuando inicia la carga
  on(UsuariosActions.cargarUsuarios, (state) => ({
    ...state, 
  })),
  
  // ✅ Cuando la carga es exitosa
  on(UsuariosActions.cargarUsuariosExitoso, (state, { usuarios }) => ({
    ...state, usuarios
  })),
  
  // ❌ Cuando la carga falla
  on(UsuariosActions.cargarUsuariosError, (state, { error }) => ({
    ...state,
    usuarios: [],  
    error 
  }))
);