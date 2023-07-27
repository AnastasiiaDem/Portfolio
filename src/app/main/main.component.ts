import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(e: any) {
  //     $("#pointer").css({ left: e.pageX - 120, top: e.pageY - 120 });
  // }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let home = (document.querySelector('.home') as HTMLElement).clientHeight;
    let about = (document.querySelector('#about') as HTMLElement).clientHeight;
    let projects = (document.querySelector('#projects') as HTMLElement).clientHeight;

    if (window.pageYOffset < home - 400) {
      this.x = 0;
    } else if (window.pageYOffset > home - 50 && window.pageYOffset < home + about - 500) {
      this.x = 1;
    } else if (window.pageYOffset > projects + 500 && window.pageYOffset < home + about + projects - 500) {
      this.x = 2;
    } else if (window.pageYOffset > home + about + projects - 50) {
      this.x = 3;
    }
  }

  x: number = 0;
  darkMode = false;

  constructor(private router: Router) {
  }

  translate(v: number) {
    this.x = v;
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
    window.scrollTo(0, 0);
  }

  setTheme() {
    this.darkMode = !this.darkMode;
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
    document.documentElement.style.colorScheme = this.darkMode ? 'dark' : 'light';
  }
}
