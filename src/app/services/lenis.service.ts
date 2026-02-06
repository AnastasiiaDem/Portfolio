import { Injectable } from '@angular/core';
import Lenis from '@studio-freight/lenis';

@Injectable({
  providedIn: 'root',
})
export class LenisService {
  private lenis: Lenis;

  constructor() {
    this.lenis = new Lenis({ duration: 1 });
  }

  raf(time: number): void {
    this.lenis.raf(time);
  }

  scrollTo(target: string | HTMLElement | number, options?: any): void {
    this.lenis.scrollTo(target as any, options);
  }
}
