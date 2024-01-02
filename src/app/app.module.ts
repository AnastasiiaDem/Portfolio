import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TaskeryComponent} from './taskery/taskery.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './main/main.component';
import {YulianaComponent} from './yuliana/yuliana.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SpinnerComponent} from './spinner/spinner.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VidlikComponent } from './vidlik/vidlik.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import {QiqiComponent} from './qiqi/qiqi.component';

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
    QiqiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
