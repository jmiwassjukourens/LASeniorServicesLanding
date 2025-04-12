import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map.component.html'
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: 34.216606, lng: -118.370331 };
  zoom = 15; 
  @Input() height : string ='';
  @Input() width : string ='';


  
}
