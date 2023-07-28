import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TaskeryComponent} from './taskery/taskery.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './main/main.component';
import {YulianaComponent} from './yuliana/yuliana.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TaskeryComponent,
    MainComponent,
    YulianaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
