import { Component } from '@angular/core';
import { TemaCurso } from '../../models/data.models';

@Component({
  selector: 'app-aprendizaje',
  standalone: true,
  templateUrl: './aprendizaje.html',
  styleUrl: './aprendizaje.scss'
})
export class AprendizajeComponent {
  listaTemas: TemaCurso[] = [
    {
      id: 1,
      nombre: 'Componentes standalone',
      categoria: 'Angular Core',
      descripcion:
        'Componentes independientes en Angular 20: cada pieza declara sus propias dependencias y recibe datos del padre con @Input.',
      tecnologias: ['Angular', 'TypeScript', 'HTML5']
    },
    {
      id: 2,
      nombre: 'Enrutamiento y navegación SPA',
      categoria: 'Angular Router',
      descripcion:
        'Rutas principales, redirecciones, RouterOutlet y enlaces activos con routerLinkActive para navegar sin recargar la página.',
      tecnologias: ['Router', 'routerLink', 'SPA']
    },
    {
      id: 3,
      nombre: 'Renderizado con control flow',
      categoria: 'Sintaxis Angular',
      descripcion:
        'Las estructuras @for y @if para recorrer colecciones y mostrar u ocultar elementos según los datos.',
      tecnologias: ['@for', '@if', 'TypeScript']
    },
    {
      id: 4,
      nombre: 'Diseño responsivo con SCSS',
      categoria: 'UI / UX',
      descripcion:
        'Variables CSS, grid y flexbox con media queries para que la misma interfaz se adapte a celular y escritorio.',
      tecnologias: ['SCSS', 'CSS Grid', 'Flexbox']
    },
    {
      id: 5,
      nombre: 'Del HTML plano al frontend por capas',
      categoria: 'Arquitectura',
      descripcion:
        'De páginas estáticas con Pico CSS a un frontend con Vite, TypeScript y patrón MVC consumiendo servicios simulados.',
      tecnologias: ['Vite', 'MVC', 'Pico CSS']
    },
    {
      id: 6,
      nombre: 'Control de versiones con Git',
      categoria: 'Herramientas Dev',
      descripcion:
        'Repositorios locales y remotos en GitHub, commits descriptivos y entregas versionadas de cada taller.',
      tecnologias: ['Git', 'GitHub', 'Terminal']
    }
  ];
}
