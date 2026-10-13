import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AprendizajeComponent } from './aprendizaje';

describe('AprendizajeComponent', () => {
  let fixture: ComponentFixture<AprendizajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AprendizajeComponent] }).compileComponents();

    fixture = TestBed.createComponent(AprendizajeComponent);
    fixture.detectChanges();
  });

  it('renderiza una tarjeta por tema', () => {
    const total = fixture.componentInstance.listaTemas.length;
    expect(fixture.nativeElement.querySelectorAll('.tarjeta').length).toBe(total);
  });
});
