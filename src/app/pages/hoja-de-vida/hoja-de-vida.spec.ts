import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HojaDeVidaComponent } from './hoja-de-vida';

describe('HojaDeVidaComponent', () => {
  let fixture: ComponentFixture<HojaDeVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HojaDeVidaComponent] }).compileComponents();

    fixture = TestBed.createComponent(HojaDeVidaComponent);
    fixture.detectChanges();
  });

  it('muestra los datos del estudiante', () => {
    expect(fixture.nativeElement.textContent).toContain('Andrés Felipe Ríos Vásquez');
  });

  it('lista todos los proyectos', () => {
    const total = fixture.componentInstance.datosEstudiante.proyectos.length;
    expect(fixture.nativeElement.querySelectorAll('.proyecto').length).toBe(total);
  });
});
