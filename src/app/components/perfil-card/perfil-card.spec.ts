import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilCardComponent } from './perfil-card';

describe('PerfilCardComponent', () => {
  let fixture: ComponentFixture<PerfilCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [PerfilCardComponent] }).compileComponents();

    fixture = TestBed.createComponent(PerfilCardComponent);
    fixture.componentInstance.estudiante = {
      nombre: 'Andrés Felipe Ríos Vásquez',
      codigo: '230232029',
      carrera: 'Ingeniería de Sistemas',
      perfil: 'Perfil de prueba',
      contacto: { ubicacion: 'Tuluá' },
      educacion: [],
      habilidades: [],
      proyectos: []
    };
    fixture.detectChanges();
  });

  it('muestra el nombre y el código', () => {
    const texto: string = fixture.nativeElement.textContent;
    expect(texto).toContain('Andrés Felipe Ríos Vásquez');
    expect(texto).toContain('230232029');
  });

  it('calcula las iniciales AR', () => {
    expect(fixture.componentInstance.iniciales).toBe('AR');
  });
});
