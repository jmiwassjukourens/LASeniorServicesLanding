import { CommonModule, NgStyle } from '@angular/common';
import { Component, ViewEncapsulation, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BaseComponent } from '../base/base.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterModule,NgStyle],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.Emulated // Por defecto
  
})
export class AppComponent extends BaseComponent{

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId); 
  }

}
