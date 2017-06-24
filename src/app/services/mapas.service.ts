import { Injectable } from '@angular/core';
import { Marcador } from 'app/interfaces/marcador';

@Injectable()
export class MapasService {
  marcadores: Marcador[] = [];
  constructor() {
    let marcador: Marcador = {
      latitud: 4.6117576,
      longitud: -74.0711244,
      draggable: true,
      titulo: 'Trabajo',
      desc: 'Lugar de trabajo'
    }
    this.marcadores.push(marcador);
  }

  insertarMarcador(marcador: Marcador) {
    this.marcadores.push(marcador);
    this.guardarMarcador();
  }
  borrarMarcador(index: number) {
    this.marcadores.splice(index, 1);
    this.guardarMarcador();
  }

  guardarMarcador() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  cargarMarcadores() {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    } else {
      this.marcadores = [];
    }
  }
}
