import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsApi {
  
  constructor() { }

  getStudents(){
    return [
      {id:1, name:'Juan', age:20},
      {id:2, name:'María', age:22},
      {id:3, name:'Pedro', age:21},
    ];
  }

  // Método para establecer estudiantes por edad
  setStudentsByAge(age: number) {
    // lógica para establecer estudiantes por edad
  }

  sumarEdades(): number {
    const estudiantes = this.getStudents();
    return estudiantes.reduce((sum, student) => sum + student.age, 0);
  }

}
