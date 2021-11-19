import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEstudiantesComponent } from './detalle-estudiantes.component';

describe('DetalleEstudiantesComponent', () => {
  let component: DetalleEstudiantesComponent;
  let fixture: ComponentFixture<DetalleEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
