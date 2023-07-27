import {Component, ElementRef, HostListener, Renderer2, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {animate} from '@angular/animations';

@Component({
  selector: 'taskery',
  templateUrl: './taskery.component.html',
  styleUrls: ['./taskery.component.scss', '../app.component.scss']
})
export class TaskeryComponent {

  degrees = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;

    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    this.degrees = scrollPercent * 360;
  }

  constructor(private router: Router) {
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
    window.scrollTo(0, 1150);
    // document.querySelector('#project')?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
