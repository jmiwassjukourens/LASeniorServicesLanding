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
  center: google.maps.LatLngLiteral = { lat: 34.052235, lng: -118.243683 };
  zoom = 15; 
  @Input() height : string ='';
  @Input() width : string ='';


  
}
