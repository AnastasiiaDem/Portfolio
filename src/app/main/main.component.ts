import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 5,
});

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../app.component.scss']
})
export class MainComponent implements OnInit {

  x: number = 0;
  darkMode = false;
  loading = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let home = (document.querySelector('.home') as HTMLElement).clientHeight;
    let about = (document.querySelector('#about') as HTMLElement).clientHeight;
    let projects = (document.querySelector('#projects') as HTMLElement).clientHeight;

    if (window.pageYOffset < home - 400) {
      this.x = 0;
    } else if (window.pageYOffset > home - 150 && window.pageYOffset < home + about - 500) {
      this.x = 1;
    } else if (window.pageYOffset > home + about - 150 && window.pageYOffset < home + about + projects - 500) {
      this.x = 2;
    } else if (window.pageYOffset > home + about + projects - 150) {
      this.x = 3;
    }

    this.reveal();
  }

  constructor(private router: Router) {
    this.darkMode = document.documentElement.getAttribute('data-theme') == 'dark';
    setTimeout(() => {
      document.querySelectorAll('video').forEach(v => {
        v.playsInline = true;
        v.loop = true;
        v.autoplay = true;
        v.muted = true;
        v.play();
      });
      this.loading = false;
      setTimeout(() => {
        document.querySelectorAll('#spinner').forEach(e => {
          e.replaceChildren('');
        });
      }, 1000);
    }, 3000);
  }

  ngOnInit() {
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  setTheme() {
    this.darkMode = !this.darkMode;
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
    document.documentElement.style.colorScheme = this.darkMode ? 'dark' : 'light';
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }

  reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
}
