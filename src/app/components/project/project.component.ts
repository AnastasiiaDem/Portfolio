import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', '../../app.component.scss'],
})
export class ProjectComponent {
  @Input() title: string;
  @Input() undertext: string;
  @Input() description: string;
  @Input() src: string;
  @Input() nav: string;
  @Input() techList: Array<string>;

  darkMode = false;

  constructor(private router: Router) {
    this.darkMode =
      document.documentElement.getAttribute('data-theme') == 'dark';
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}
