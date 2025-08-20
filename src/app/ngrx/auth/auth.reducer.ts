import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AuthState, initialAuthState } from './auth.model';
 import * as AuthActions from './auth.actions';

 export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, { email, password }) => ({
    ...state,              // 📋 Mantén el estado anterior
    email : email,                 // 📧 Actualiza email
    password,   
    //isAdmin : isAdmin()
     
    // 🔑 Actualiza password  
    isLoggedIn: true       // ✅ Marca como logueado
  })),
  on(AuthActions.logout, (state) => ({
    ...state,              // 📋 Mantén el estado anterior
    email: null,           // 🗑️ Limpia email
    password: null,        // 🗑️ Limpia password
    isLoggedIn: false      // ❌ Marca como deslogueado
  }))
);