
import { Directive, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive()
export class BaseComponent {
  isMenuActive = false;
  isDesktop = false;
  putbr = false;
  providers: [] = [];
  expandedIndex: number | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = window.innerWidth > 768;
      this.putbr = this.isDesktop;
    }
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  toggleService(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      const screenWidth = window.innerWidth;
      this.isDesktop = screenWidth > 768;
      this.isMenuActive = !this.isDesktop ? this.isMenuActive : false;
      this.putbr = this.isDesktop;
    }
  }
}