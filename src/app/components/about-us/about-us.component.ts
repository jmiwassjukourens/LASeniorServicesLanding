import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent extends BaseComponent{

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);
  } 
}
