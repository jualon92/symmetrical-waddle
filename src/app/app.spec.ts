import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  //CONFIG
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //SI HAY MAS DEPENDENCIAS, MOCKEARLAS.
      imports: [App],
    }).compileComponents();
  });

  //CASOS ESPECIFICOS: PRUEBAS
  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
  it('debería retornar un título incorrecto', () => {
    //SET UP 
    const fixture = TestBed.createComponent(App);

    //ACT
    const titulo = fixture.componentInstance.obtenerTitulo();

    //ASSERT
    expect(titulo).toBe('Título Incorrecto2');

});

 
});
