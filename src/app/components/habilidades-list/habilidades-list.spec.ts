import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabilidadesListComponent } from './habilidades-list';

describe('HabilidadesListComponent', () => {
  let fixture: ComponentFixture<HabilidadesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HabilidadesListComponent] }).compileComponents();

    fixture = TestBed.createComponent(HabilidadesListComponent);
    fixture.componentInstance.habilidades = [{ grupo: 'Lenguajes', items: ['Java', 'C'] }];
    fixture.detectChanges();
  });

  it('pinta cada habilidad como una ficha', () => {
    expect(fixture.nativeElement.querySelectorAll('.ficha').length).toBe(2);
  });
});
