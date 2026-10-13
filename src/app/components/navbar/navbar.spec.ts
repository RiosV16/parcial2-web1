import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './navbar';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
  });

  it('muestra un enlace por cada sección', () => {
    const enlaces = fixture.nativeElement.querySelectorAll('.menu__enlace');
    expect(enlaces.length).toBe(3);
  });
});
