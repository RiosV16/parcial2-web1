import { Component, Input } from '@angular/core';
import { GrupoHabilidades } from '../../models/data.models';

@Component({
  selector: 'app-habilidades-list',
  standalone: true,
  templateUrl: './habilidades-list.html',
  styleUrl: './habilidades-list.scss'
})
export class HabilidadesListComponent {
  @Input() habilidades: GrupoHabilidades[] = [];
}
