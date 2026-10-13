export interface Contacto {
  ubicacion: string;
  /** Opcionales: se muestran solo si los completas en hoja-de-vida.ts */
  email?: string;
  telefono?: string;
  github?: string;
}

export interface Educacion {
  titulo: string;
  institucion: string;
  anio: string;
}

export interface GrupoHabilidades {
  grupo: string;
  items: string[];
}

export interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
}

export interface HojaDeVida {
  nombre: string;
  codigo: string;
  carrera: string;
  perfil: string;
  contacto: Contacto;
  educacion: Educacion[];
  habilidades: GrupoHabilidades[];
  proyectos: Proyecto[];
}

export interface TemaCurso {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  tecnologias: string[];
}

export interface ItemTemaLibre {
  id: number;
  titulo: string;
  categoria: string;
  descripcion: string;
  etiquetas: string[];
  /** Símbolo corto que se muestra como "portada" de la tarjeta */
  icono: string;
}
