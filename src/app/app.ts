import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Auth } from './core/auth/auth';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, logout } from './ngrx/auth/auth.actions';
import { cargarUsuarios } from './ngrx/usuarios/usuarios.actions';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, JsonPipe, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('prueba8');
  loginForm!: FormGroup;
  usuarios$!: Observable<any>;
  isAdmin = false;
  user: { username: string, role: string } | null = null;
   user$!: Observable<string | null>;
  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private store: Store<{ auth: { email: string, password: string } }>,
    private userStorage: Store<{ usuarios: any }>
  ) {


    this.loginForm = this.fb.group({
      //add custom validator
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]]
    });
  }
  //TODO: move to a service
  //EXPANDIRLO, username es uno de estos, que esta ubicado en este arreglo, es admin
  // no es admin
  checkIfAdmin(username: string) {
    return username === "admin"

  }

  ngOnInit(){
this.user$ = this.store.select(state => state.auth.email)

    this.user$.subscribe((user:any) => {
      if (user) {
        console.log('👤 Username obtenido:', user);
        this.isAdmin = this.checkIfAdmin(user as string);
   //     this.isAdmin = this.authService.checkIfAdmin
      }
    });

// devolvia el arreglo, y tambien agrega
// user =



     this.usuarios$ = this.userStorage.select(state => state.usuarios);

    /* this.auth.loggedUser$.subscribe(user => {

      this.user = user;
      if (user) {

        console.log('Logged in user:', user);
      } else {
        console.log('No user is logged in');
      }
    });

 */


  }

  obtenerUsuario(){

this.user$ = this.store.select(state => state.auth.email)

    //
  }

  obtenerTitulo(){
    // si estamos en tan pagina ,el titulo
    // switch,

    return "Título Incorrecto"
  }


  cargarUsuarios(){
    this.store.dispatch(cargarUsuarios(

    ))
  }



  onSubmit() {
      const { username, password } = this.loginForm.value;
      console.log(username, "admin")
     this.store.dispatch(login({ email: username, password: password}));




     /* console.log('Form submitted:', this.loginForm.value);
    if (this.loginForm.valid) {
      // Call the Auth service to log in
      const { username, password } = this.loginForm.value;
      if (this.auth.logIn(username, password)) {
        console.log('Login successful:', this.loginForm.value);
         this.store.dispatch(login({ email: username, password }));
      } else {
        console.log('Login failed');
      }
    } else {
      console.log('Login form is invalid');
    } */
  }


    logout() {
    this.store.dispatch(logout());
  }

}
