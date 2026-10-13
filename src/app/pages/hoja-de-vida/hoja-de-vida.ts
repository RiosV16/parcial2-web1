import { Component } from '@angular/core';
import { HojaDeVida } from '../../models/data.models';
import { PerfilCardComponent } from '../../components/perfil-card/perfil-card';
import { HabilidadesListComponent } from '../../components/habilidades-list/habilidades-list';

@Component({
  selector: 'app-hoja-de-vida',
  standalone: true,
  imports: [PerfilCardComponent, HabilidadesListComponent],
  templateUrl: './hoja-de-vida.html',
  styleUrl: './hoja-de-vida.scss'
})
export class HojaDeVidaComponent {
  datosEstudiante: HojaDeVida = {
    nombre: 'Andrés Felipe Ríos Vásquez',
    codigo: '230232029',
    carrera: 'Ingeniería de Sistemas',
    perfil:
      'Estudiante de Ingeniería de Sistemas en la UCEVA, en el Valle del Cauca. Me muevo entre Java, C, Python y ' +
      'TypeScript, y me gusta que las cosas funcionen de punta a punta: desde un servidor Linux configurado a mano ' +
      'hasta una interfaz web que alguien pueda usar. Fuera del código, me interesa crear contenido en video.',
    contacto: {
      ubicacion: 'Tuluá, Valle del Cauca, Colombia'
      // Para mostrar más datos de contacto, descomenta y completa:
      // email: 'tu-correo@ejemplo.com',
      // telefono: '+57 300 000 0000',
      // github: 'https://github.com/tu-usuario'
    },
    educacion: [
      {
        titulo: 'Ingeniería de Sistemas',
        institucion: 'Unidad Central del Valle del Cauca (UCEVA)',
        anio: 'En curso'
      }
    ],
    habilidades: [
      { grupo: 'Lenguajes', items: ['Java', 'C', 'Python', 'TypeScript', 'SQL', 'Batch (CMD)'] },
      { grupo: 'Web', items: ['Angular 20', 'HTML5', 'CSS3 / SCSS', 'Pico CSS', 'Bootstrap', 'Vite'] },
      { grupo: 'Sistemas y datos', items: ['Linux', 'SSH', 'Nmap', 'Docker', 'Oracle'] },
      { grupo: 'Herramientas', items: ['Git', 'GitHub'] }
    ],
    proyectos: [
      {
        nombre: 'Sistema de parqueadero',
        descripcion: 'Aplicación en Java para gestionar la entrada, salida y cobro de un parqueadero (tercer parcial).',
        tecnologias: ['Java', 'POO']
      },
      {
        nombre: 'Servidor Linux con acceso remoto',
        descripcion: 'Servidor en modo texto con SSH en el puerto 2222, escaneo con Nmap y acceso remoto demostrado ante el docente.',
        tecnologias: ['Linux', 'SSH', 'Nmap']
      },
      {
        nombre: 'Base de datos tipo Airbnb',
        descripcion: 'Diseño de usuarios, tablas, índices, vistas y recuperación, entregado en tres scripts SQL.',
        tecnologias: ['Oracle', 'SQL', 'DDL']
      },
      {
        nombre: 'Simulación de dados y Parqués',
        descripcion: 'Scripts que comparan la probabilidad teórica con la simulada para la suma de tres dados y los dobles.',
        tecnologias: ['Python', 'Simulación']
      },
      {
        nombre: 'Utilidad de sistema en CMD',
        descripcion: 'Proyecto de 11 funciones en CMD puro: info del sistema, disco, servicios, eventos y limpieza de temporales.',
        tecnologias: ['Batch', 'Windows']
      }
    ]
  };
}
