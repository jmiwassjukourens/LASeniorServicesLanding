import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, NgStyle, isPlatformBrowser } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgStyle, CommonModule,ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LA Senior Services';
  isMenuActive = false;
  isDesktop: boolean = false;
  putbr: boolean = false;
  providers: [] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = window.innerWidth > 768;
      this.putbr = this.isDesktop;
    }
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      const screenWidth = window.innerWidth;
      if (screenWidth > 768) {
        this.isMenuActive = false;
         this.isDesktop = true;
      } else {
        this.putbr = false;
        this.isDesktop = false;
      }
    }
  }
}