import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TaskeryComponent} from './taskery/taskery.component';
import {AppRoutingModule} from './app-routing.module';
import { MainComponent } from './main/main.component';
import {YulianaComponent} from './yuliana/yuliana.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskeryComponent,
    MainComponent,
    YulianaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
