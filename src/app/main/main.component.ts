import {Component, HostListener} from '@angular/core';
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
    let contact = (document.querySelector('#contact') as HTMLElement).clientHeight;

    let element = document.querySelector('.floating-indicator') as HTMLElement;

    if (window.pageYOffset < home - 400) {
      element.style.transform = 'translateX(0%)';
    } else if (window.pageYOffset > home - 100 && window.pageYOffset < home + about - 500) {
      element.style.transform = 'translateX(100%)';
    } else if (window.pageYOffset > projects + 550 && window.pageYOffset < home + about + projects - 550) {
      element.style.transform = 'translateX(200%)';
    } else if (window.pageYOffset > home + about + projects - 10) {
      element.style.transform = 'translateX(300%)';
    }
  }

  x: number = 0;


  constructor(private router: Router) {
  }


  translate(v: number) {
    this.x = v;
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
    window.scrollTo(0, 0);
  }
}
