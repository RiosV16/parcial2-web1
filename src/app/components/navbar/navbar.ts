import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  readonly enlaces = [
    { ruta: '/hoja-de-vida', etiqueta: 'Hoja de vida', numero: '01' },
    { ruta: '/aprendizaje', etiqueta: 'Aprendizaje', numero: '02' },
    { ruta: '/tema-libre', etiqueta: 'Tema libre', numero: '03' }
  ];
}
