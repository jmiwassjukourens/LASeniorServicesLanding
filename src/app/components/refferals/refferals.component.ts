import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-refferals',
  standalone: true,
  imports: [],
  templateUrl: './refferals.component.html',
  styleUrl: './refferals.component.css'
})
export class RefferalsComponent extends BaseComponent{

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);
  } 
}
