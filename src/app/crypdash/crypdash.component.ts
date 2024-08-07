import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 5,
});

@Component({
  selector: 'app-crypdash',
  templateUrl: './crypdash.component.html',
  styleUrls: ['./crypdash.component.scss', '../app.component.scss']
})
export class CrypdashComponent implements OnInit {

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

  constructor(private location: Location) {
    this.darkMode = document.documentElement.getAttribute('data-theme') == 'dark';
  }

  ngOnInit() {
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    setTimeout(() => {
      lenis.scrollTo('#top');
    }, 100);
  }

  scrollToTop() {
    lenis.scrollTo('#top');
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
