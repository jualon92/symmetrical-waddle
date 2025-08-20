import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  //knowledge table
  usersData = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'user', password: 'user', role: 'user' }
  ];
  // should be a subject, notify that it changed
  private loggedUserSubject = new BehaviorSubject<{ username: string, role: string } | null>(null);
  loggedUser$ = this.loggedUserSubject.asObservable();


  constructor() { }

  logIn(username: string, password: string): boolean {
    // check if its admin or common user
    // use knowledge table
    const user = this.usersData.find(u => u.username === username && u.password === password);
    if (user) {
      console.log("user")
      this.loggedUserSubject.next({ username: user.username, role: user.role });
      return true;
    }
    return false;
  }

 
  log(email:string, password:string){
  
     if(email === "admin"){
      return of({ 
        username: email.split('@')[0], // username del email
        email: email,
        role: 'admin',
      });
     }else{
      return of({
        username: email,
        email: email,
        role: "user",
      });
     }
  }
  
}
