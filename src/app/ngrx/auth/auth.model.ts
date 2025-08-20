export interface AuthState {
  email: string | null;
  password: string | null;
  isLoggedIn: boolean;
  isAdmin: boolean;
}

export const initialAuthState: AuthState = {
  email: null,
  password: null,
  isLoggedIn: false,
  isAdmin: false,
};