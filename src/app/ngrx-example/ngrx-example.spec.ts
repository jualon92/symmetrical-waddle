import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxExample } from './ngrx-example';

describe('NgrxExample', () => {
  let component: NgrxExample;
  let fixture: ComponentFixture<NgrxExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
