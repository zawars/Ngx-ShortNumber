import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
