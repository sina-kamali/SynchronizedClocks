import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {ClockState} from "./shared/interfaces/clock-state";
import {TwoDigitsPipe} from "./shared/pipes/two-digits.pipe";
import {ToggleSwitchComponent} from "./templates/toggle-switch/toggle-switch.component";
import {AnalogComponent} from "./clock-faces/analog/analog.component";
import {DigitalComponent} from "./clock-faces/digital/digital.component";
import {CustomDropDownComponent} from "./templates/custom-drop-down/custom-drop-down.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        AnalogComponent,
        DigitalComponent,
        TwoDigitsPipe,
        CustomDropDownComponent,
        ToggleSwitchComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Clocks time should sync', () => {
    const appComponentComponentFixture = TestBed.createComponent(AppComponent);
    const app = appComponentComponentFixture.componentInstance;
    const analogComponentComponentFixture = TestBed.createComponent(AnalogComponent);
    const analog = analogComponentComponentFixture.componentInstance;
    const digitalComponentComponentFixture = TestBed.createComponent(DigitalComponent);
    const digital = digitalComponentComponentFixture.componentInstance;
    const newClockState: ClockState = {
      Hours: 10,
      Minutes: 50,
      Seconds: 10
    };
    const secondsDegrees = `rotate(${((newClockState.Seconds / 60) * 360) + 90}deg)`;
    const minsDegrees = `rotate(${((newClockState.Minutes / 60) * 360) + ((newClockState.Seconds /60)*6) + 90}deg)`;
    const hourDegrees = `rotate(${((newClockState.Hours / 12) * 360) + ((newClockState.Minutes/60)*30) + 90}deg)`;
    app.overrideClockState(newClockState);
    digital.clockState = app.clockDetails;
    analog.clockState = app.clockDetails;
    appComponentComponentFixture.detectChanges();
    digitalComponentComponentFixture.detectChanges();
    analogComponentComponentFixture.detectChanges();
    expect(digitalComponentComponentFixture.nativeElement.querySelector('#digital-clock').innerText).toEqual(`${newClockState.Hours}:${newClockState.Minutes}:${newClockState.Seconds}`);
    expect(analog.hourDegrees).toEqual(hourDegrees);
    expect(analog.minsDegrees).toEqual(minsDegrees);
    expect(analog.secondsDegrees).toEqual(secondsDegrees);
  });
});
