import { Routes } from '@angular/router';
import { HojaDeVidaComponent } from './pages/hoja-de-vida/hoja-de-vida';
import { AprendizajeComponent } from './pages/aprendizaje/aprendizaje';
import { TemaLibreComponent } from './pages/tema-libre/tema-libre';

export const routes: Routes = [
  { path: '', redirectTo: 'hoja-de-vida', pathMatch: 'full' },
  { path: 'hoja-de-vida', component: HojaDeVidaComponent, title: 'Hoja de vida · Andrés Ríos' },
  { path: 'aprendizaje', component: AprendizajeComponent, title: 'Aprendizaje · Andrés Ríos' },
  { path: 'tema-libre', component: TemaLibreComponent, title: 'Tema libre · Andrés Ríos' },
  { path: '**', redirectTo: 'hoja-de-vida' }
];
