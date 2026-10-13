import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemaLibreComponent } from './tema-libre';

describe('TemaLibreComponent', () => {
  let fixture: ComponentFixture<TemaLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TemaLibreComponent] }).compileComponents();

    fixture = TestBed.createComponent(TemaLibreComponent);
    fixture.detectChanges();
  });

  it('renderiza una tarjeta por elemento del catálogo', () => {
    const total = fixture.componentInstance.catalogo.length;
    expect(fixture.nativeElement.querySelectorAll('.tarjeta').length).toBe(total);
  });
});
