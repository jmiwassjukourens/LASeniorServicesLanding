import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { NgStyle, isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgStyle, CommonModule],
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