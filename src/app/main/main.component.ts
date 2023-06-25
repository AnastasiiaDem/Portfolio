import { Component } from '@angular/core';
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

  x: number = 0;


  constructor(private router: Router) {}


  translate(v: number) {
    this.x = v;
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}
