import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LenisService } from '../../services/lenis.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../app.component.scss'],
})
export class HeaderComponent {
  @Output() theme = new EventEmitter<void>();
  @Input() x = 0;

  darkMode = false;

  constructor(private lenisService: LenisService) {
    this.darkMode =
      document.documentElement.getAttribute('data-theme') === 'dark';
  }

  setTheme(): void {
    this.theme.emit();
  }

  translate(v: number): void {
    this.x = v;
    if (v === 0) {
      window.scrollTo(0, 0);
    }
  }

  scrollTo(dest: string): void {
    this.lenisService.scrollTo(dest);
  }

  indicatorTransform(): string {
    return `translateX(${this.x * 100}%)`;
  }
}
