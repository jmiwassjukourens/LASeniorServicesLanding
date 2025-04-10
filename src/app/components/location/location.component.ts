import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent extends BaseComponent{

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);
  } 
}
