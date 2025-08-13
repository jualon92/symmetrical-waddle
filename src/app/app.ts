import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Auth } from './core/auth/auth';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [JsonPipe, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('prueba8');
  loginForm!: FormGroup;
  user: { username: string, role: string } | null = null;
  constructor(
    private fb: FormBuilder,
    private auth: Auth
  ) {
    this.loginForm = this.fb.group({
      //add custom validator
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit(){
    
    this.auth.loggedUser$.subscribe(user => {
   
      this.user = user;
      if (user) {

        console.log('Logged in user:', user);
      } else {
        console.log('No user is logged in');
      }
    });
  }
  obtenerTitulo(){
    // si estamos en tan pagina ,el titulo
    // switch, 
    
    return "Título Incorrecto"
  }



  onSubmit() {
    console.log('Form submitted:', this.loginForm.value);
    if (this.loginForm.valid) {
      // Call the Auth service to log in
      const { username, password } = this.loginForm.value;
      if (this.auth.logIn(username, password)) {
        console.log('Login successful:', this.loginForm.value);
      } else {
        console.log('Login failed');
      }
    } else {
      console.log('Login form is invalid');
    }
  }

}
