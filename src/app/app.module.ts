import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ProjectComponent } from './components/project/project.component';
import { QiqiComponent } from './components/qiqi/qiqi.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TaskeryComponent } from './components/taskery/taskery.component';
import { VidlikComponent } from './components/vidlik/vidlik.component';
import { YulianaComponent } from './components/yuliana/yuliana.component';
import { LenisService } from './services/lenis.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskeryComponent,
    MainComponent,
    YulianaComponent,
    SpinnerComponent,
    VidlikComponent,
    HeaderComponent,
    ProjectComponent,
    QiqiComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LenisService],
  bootstrap: [AppComponent],
})
export class AppModule {}
