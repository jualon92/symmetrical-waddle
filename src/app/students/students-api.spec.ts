import { TestBed } from '@angular/core/testing';

import { StudentsApi } from './students-api';

describe('StudentsApi', () => {
  let service: StudentsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TEST
  it('debería retornar la lista de estudiantes', () => {
    const estudiantes = service.getStudents();
    expect(estudiantes.length).toBe(3);
    expect(estudiantes).toEqual([
      {id:1, name:'Juan', age:20},
      {id:2, name:'María', age:22},
      {id:3, name:'Pedro', age:21},
    ]);
  });

  //TEST
  fit('debería retornar la suma de las edades', () => {
    const sumaEdades = service.sumarEdades();
    expect(sumaEdades).toBe(63);
  });

  // test sumar edades 
  
});
