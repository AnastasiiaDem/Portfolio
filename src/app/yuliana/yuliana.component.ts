import {Component, HostListener, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'yuliana',
  templateUrl: './yuliana.component.html',
  styleUrls: ['./yuliana.component.scss', '../app.component.scss']
})
export class YulianaComponent {

  // @ViewChild('card', { static: true }) cardRef!: ElementRef;
  // @ViewChild('glow', { static: true }) glowRef!: ElementRef;
  // bounds: DOMRect | null = null;

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
              private renderer: Renderer2,
              private location: Location) {

    setTimeout(() => {

    }, 2000);
    this.darkMode = document.documentElement.getAttribute('data-theme') == 'dark';
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
    window.scrollTo(0, 1150);
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

  // rotateToMouse(e: MouseEvent) {
  //   if (!this.bounds) return;
  //   const mouseX = e.clientX;
  //   const mouseY = e.clientY;
  //   const leftX = mouseX - this.bounds.x;
  //   const topY = mouseY - this.bounds.y;
  //   const center = {
  //     x: leftX - this.bounds.width / 2,
  //     y: topY - this.bounds.height / 2,
  //   };
  //   const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
  //
  //   this.renderer.setStyle(this.cardRef.nativeElement, 'transform', `scale3d(1.07, 1.07, 1.07) rotate3d(${center.y / 100}, ${-center.x / 100}, 0, ${Math.log(distance) * 2}deg)`);
  //
  //   this.renderer.setStyle(
  //     this.glowRef.nativeElement,
  //     'backgroundImage',
  //     `radial-gradient(circle at ${center.x * 2 + this.bounds.width / 2}px ${center.y * 2 + this.bounds.height / 2}px, #ffffff55, #0000000f)`
  //   );
  //
  //   this.renderer.addClass(this.cardRef.nativeElement, 'rotate-card');
  //   this.renderer.addClass(this.glowRef.nativeElement, 'add-glow');
  // }
  //
  // onMouseEnter($event: MouseEvent) {
  //   this.bounds = this.cardRef.nativeElement.getBoundingClientRect();
  //   this.renderer.listen(document, 'mousemove', (e: MouseEvent) => this.rotateToMouse(e));
  // }
  //
  // onMouseLeave() {
  //   this.renderer.removeClass(this.cardRef.nativeElement, 'rotate-card');
  //   this.renderer.setStyle(this.cardRef.nativeElement, 'background', '');
  //   this.renderer.removeClass(this.glowRef.nativeElement, 'add-glow');
  //   this.bounds = null;
  // }
}
