import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalogComponent } from './clock-faces/analog/analog.component';
import { DigitalComponent } from './clock-faces/digital/digital.component';
import { TwoDigitsPipe } from './shared/pipes/two-digits.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnalogComponent,
    DigitalComponent,
    TwoDigitsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
