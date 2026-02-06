import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { LenisService } from 'src/app/services/lenis.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../../app.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  x = 0;
  darkMode = false;
  loading = true;
  marqueeRepeat = Array(12).fill(0);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  isSubmitting = false;
  formStatus: { type: 'success' | 'error'; message: string } | null = null;

  private readonly EMAILJS_PUBLIC_KEY = 'efWhZ7BfmRb5fTKch';
  private readonly EMAILJS_SERVICE_ID = 'service_7yt70de';
  private readonly EMAILJS_TEMPLATE_ID = 'template_skg69jn';
  private readonly EMAILJS_CONFIRMATION_TEMPLATE_ID = 'template_mqsh8t6';

  private homeEl!: HTMLElement;
  private aboutEl!: HTMLElement;
  private projectsEl!: HTMLElement;
  private contactEl!: HTMLElement;

  private rafId: number | null = null;
  private scrollDirty = false;

  constructor(
    private router: Router,
    private lenisService: LenisService,
  ) {
    this.darkMode =
      document.documentElement.getAttribute('data-theme') === 'dark';
  }

  ngOnInit() {
    emailjs.init(this.EMAILJS_PUBLIC_KEY);

    this.homeEl = document.querySelector('.home') as HTMLElement;
    this.aboutEl = document.querySelector('#about') as HTMLElement;
    this.projectsEl = document.querySelector('#projects') as HTMLElement;
    this.contactEl = document.querySelector('#contact') as HTMLElement;

    const loop = (time: number) => {
      this.lenisService.raf(time);

      if (this.scrollDirty) {
        this.scrollDirty = false;
        this.updateActiveSection();
        this.reveal();
      }

      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);

    window.addEventListener('scroll', this.onScroll, { passive: true });

    this.initVideos();
  }

  ngOnDestroy() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    window.removeEventListener('scroll', this.onScroll);
  }

  private onScroll = () => {
    this.scrollDirty = true;
  };

  private updateActiveSection(): void {
    const vh = window.innerHeight;

    const aboutRect = this.aboutEl.getBoundingClientRect();
    const projectsRect = this.projectsEl.getBoundingClientRect();
    const contactRect = this.contactEl.getBoundingClientRect();

    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.scrollHeight - 5;

    const threshold = vh * 0.4;

    if (atBottom || contactRect.top < threshold) {
      this.x = 2;
    } else if (projectsRect.top < threshold) {
      this.x = 1;
    } else {
      this.x = 0;
    }
  }

  private reveal(): void {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const threshold = 150;

    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - threshold) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  private initVideos(): void {
    setTimeout(() => {
      document.querySelectorAll('video').forEach((v) => {
        v.playsInline = true;
        v.loop = true;
        v.autoplay = true;
        v.muted = true;
        v.play();
      });

      this.loading = false;

      setTimeout(() => {
        document.querySelectorAll('#spinner').forEach((e) => {
          e.replaceChildren('');
        });
      }, 1000);
    }, 3000);
  }

  setTheme(): void {
    this.darkMode = !this.darkMode;
    document.documentElement.setAttribute(
      'data-theme',
      this.darkMode ? 'dark' : 'light',
    );
    document.documentElement.style.colorScheme = this.darkMode
      ? 'dark'
      : 'light';
  }

  navigateTo(page: string): void {
    this.router.navigate(['/' + page]);
  }

  async onSubmitContact(form: NgForm): Promise<void> {
    if (form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.formStatus = null;

      try {
        const templateParams = {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
        };

        await emailjs.send(
          this.EMAILJS_SERVICE_ID,
          this.EMAILJS_TEMPLATE_ID,
          templateParams,
        );

        await emailjs.send(
          this.EMAILJS_SERVICE_ID,
          this.EMAILJS_CONFIRMATION_TEMPLATE_ID,
          templateParams,
        );

        this.formStatus = {
          type: 'success',
          message:
            'Thank you! Your message has been sent successfully. You should receive a confirmation email shortly.',
        };

        form.resetForm();
        this.formData = { name: '', email: '', subject: '', message: '' };
      } catch (error) {
        console.error('EmailJS error:', error);
        this.formStatus = {
          type: 'error',
          message:
            'Oops! Something went wrong. Please try again or email me directly.',
        };
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
