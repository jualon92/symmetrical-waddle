import { createAction, props } from '@ngrx/store';
 
//handle auth actions
export const login = createAction(
  '[Auth] Login',
  props<{ email: string, password:string }>()
);

//handle success
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: { username: string; role: string } }>()
);


export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);


export const logout = createAction('[Auth] Logout');