import { Component } from '@angular/core';

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
}
