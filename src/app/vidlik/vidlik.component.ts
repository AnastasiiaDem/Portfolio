import {Component, HostListener, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-vidlik',
  templateUrl: './vidlik.component.html',
  styleUrls: ['./vidlik.component.scss', '../app.component.scss']
})
export class VidlikComponent {

  degrees = 0;
  darkMode = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;

    let scrollPercent = scrollTop / (docHeight - winHeight);
    this.degrees = scrollPercent * 360;
  }

  constructor(private router: Router,
              private renderer: Renderer2,
              private location: Location) {
    this.darkMode = document.documentElement.getAttribute('data-theme') == 'dark';
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  setTheme() {
    this.darkMode = !this.darkMode;
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
    document.documentElement.style.colorScheme = this.darkMode ? 'dark' : 'light';
  }

  back() {
    this.location.back();
  }
}
