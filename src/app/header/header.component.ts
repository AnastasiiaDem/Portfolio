import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 3,
});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../app.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() theme: EventEmitter<any> = new EventEmitter();

  x: number = 0;
  darkMode = false;

  constructor(private router: Router) {
    this.darkMode = document.documentElement.getAttribute('data-theme') == 'dark';
  }

  ngOnInit() {
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  setTheme() {
    this.theme.emit();
  }

  translate(v: number) {
    this.x = v;
    if (v === 0) {
      window.scrollTo(0, 0);
    }
  }

  scrollTo(dest: string) {
    lenis.scrollTo(dest);
  }
}
