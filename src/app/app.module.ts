import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalogComponent } from './clock-faces/analog/analog.component';
import { DigitalComponent } from './clock-faces/digital/digital.component';
import { TwoDigitsPipe } from './shared/pipes/two-digits.pipe';
import { CustomDropDownComponent } from './templates/custom-drop-down/custom-drop-down.component';
import {FormsModule} from "@angular/forms";
import { CustomTimeInputComponent } from './templates/custom-time-input/custom-time-input.component';
import { ToggleSwitchComponent } from './templates/toggle-switch/toggle-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalogComponent,
    DigitalComponent,
    TwoDigitsPipe,
    CustomDropDownComponent,
    CustomTimeInputComponent,
    ToggleSwitchComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
