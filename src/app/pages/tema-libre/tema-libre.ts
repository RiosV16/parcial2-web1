import { Component } from '@angular/core';
import { ItemTemaLibre } from '../../models/data.models';

@Component({
  selector: 'app-tema-libre',
  standalone: true,
  templateUrl: './tema-libre.html',
  styleUrl: './tema-libre.scss'
})
export class TemaLibreComponent {
  catalogo: ItemTemaLibre[] = [
    {
      id: 1,
      titulo: 'Documental de bolsillo',
      categoria: 'Formato',
      descripcion:
        'Mostrar lo que grabo mientras cuento una historia interesante en voz en off, como un mini documental hecho con lo que tengo a la mano.',
      etiquetas: ['Narrativa', 'Voz en off', 'Storytelling'],
      icono: '🎬'
    },
    {
      id: 2,
      titulo: 'Insta360 X4',
      categoria: 'Equipo',
      descripcion:
        'Mi cámara 360° para grabar desde ángulos que una cámara normal no alcanza y reencuadrar la toma después.',
      etiquetas: ['360°', 'Cámara', 'Grabación'],
      icono: '📷'
    },
    {
      id: 3,
      titulo: 'Historias sobre una mesa de billar',
      categoria: 'Idea de video',
      descripcion:
        'Una partida de pool de fondo mientras la voz en off cuenta la historia. Un video diferente, de máximo 15 minutos.',
      etiquetas: ['Billar', 'Pool', 'Máx. 15 min'],
      icono: '🎱'
    },
    {
      id: 4,
      titulo: 'Saludo de barrio, con respeto',
      categoria: 'Identidad',
      descripcion:
        'Mi sello personal: la cercanía del barrio sin perder el respeto por quien está del otro lado de la pantalla.',
      etiquetas: ['Estilo', 'Marca personal', 'Cercanía'],
      icono: '🤝'
    },
    {
      id: 5,
      titulo: 'Del Valle a Latinoamérica',
      categoria: 'Meta',
      descripcion:
        'Contenido hecho desde el Valle del Cauca, pensado para llegar a toda Latinoamérica y marcar diferencia.',
      etiquetas: ['Crecimiento', 'Audiencia', 'Latam'],
      icono: '🌎'
    }
  ];
}
