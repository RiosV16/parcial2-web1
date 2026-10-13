import { Component, Input } from '@angular/core';
import { HojaDeVida } from '../../models/data.models';

@Component({
  selector: 'app-perfil-card',
  standalone: true,
  templateUrl: './perfil-card.html',
  styleUrl: './perfil-card.scss'
})
export class PerfilCardComponent {
  @Input() estudiante!: HojaDeVida;

  /** Primera letra del primer nombre y del primer apellido (Andrés Felipe Ríos Vásquez → AR). */
  get iniciales(): string {
    const partes = this.estudiante?.nombre?.trim().split(/\s+/) ?? [];
    if (partes.length === 0) return '';
    const primera = partes[0][0];
    const apellido = partes.length >= 3 ? partes[2][0] : partes[partes.length - 1][0];
    return (primera + apellido).toUpperCase();
  }
}
