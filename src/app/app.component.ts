import { Component } from '@angular/core';
import { MapasService } from '../app/services/mapas.service';
import { Marcador } from 'app/interfaces/marcador';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mapas';
  lat: number = 4.6117576;
  lng: number = -74.0711244;
  zoom: number = 14;
  marcadorSel: any = null;
  draggable: string = '1';

  constructor(public _ms: MapasService) {
    this._ms.cargarMarcadores();

  }

  clickMapa($event) {
    console.log($event);
    let marcador: Marcador = {
      latitud: $event.coords.lat,
      longitud: $event.coords.lng,
      titulo: 'prueba',
      draggable: true
    }
    this._ms.insertarMarcador(marcador);
  }
  clickMarcador(marcador: Marcador, i: number) {
    console.log(marcador, i);
    this.marcadorSel = marcador;
    if (marcador.draggable) {
      this.draggable = '1';
    } else {
      this.draggable = '0';

    }
  }

  dragEndMarcador(marcador: Marcador, $event) {
    console.log(marcador, $event);
    let lat = $event.coords.lat;
    let lng = $event.coords.lng;
    marcador.latitud = lat;
    marcador.longitud = lng;

    this._ms.guardarMarcador();
  }

  borrarMarcador(idx: number) {
    this._ms.borrarMarcador(idx);
  }

  cambiaSelect() {
    if (this.draggable === '1') {
      this.marcadorSel.draggable = true;
    } else {
      this.marcadorSel.draggable = false;
    }
  }


}
