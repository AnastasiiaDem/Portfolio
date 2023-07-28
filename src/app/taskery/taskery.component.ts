import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'taskery',
  templateUrl: './taskery.component.html',
  styleUrls: ['./taskery.component.scss', '../app.component.scss']
})
export class TaskeryComponent {

  degrees = 0;
  darkMode = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;

    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    this.degrees = scrollPercent * 360;
  }

  constructor(private router: Router,
              private location: Location) {
    this.darkMode = document.documentElement.getAttribute('data-theme') == 'dark';
  }

  back() {
    this.location.back();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  setTheme() {
    this.darkMode = !this.darkMode;
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
    document.documentElement.style.colorScheme = this.darkMode ? 'dark' : 'light';
  }
}
