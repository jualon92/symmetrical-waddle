
// actions, login , ngrx

import { createAction, props } from "@ngrx/store";

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);