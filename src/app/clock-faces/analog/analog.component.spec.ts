import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogComponent } from './analog.component';
import {ClockState, DEFAULT_CLOCK_STATE} from "../../shared/interfaces/clock-state";

describe('AnalogComponent', () => {
  let component: AnalogComponent;
  let fixture: ComponentFixture<AnalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Analog Component Clock state should change', () => {

    const newClockState: ClockState = {
      Hours: 10,
      Minutes: 50,
      Seconds: 10
    };

    component.clockState = newClockState;
    fixture.detectChanges();

    const secondsDegrees = `rotate(${((DEFAULT_CLOCK_STATE.Seconds / 60) * 360) + 90}deg)`;
    const minsDegrees = `rotate(${((DEFAULT_CLOCK_STATE.Minutes / 60) * 360) + ((DEFAULT_CLOCK_STATE.Seconds /60)*6) + 90}deg)`;
    const hourDegrees = `rotate(${((DEFAULT_CLOCK_STATE.Hours / 12) * 360) + ((DEFAULT_CLOCK_STATE.Minutes/60)*30) + 90}deg)`;

    expect(`${component.hourDegrees}-${component.minsDegrees}-${component.secondsDegrees}`).not.toEqual(`${hourDegrees}-${minsDegrees}-${secondsDegrees}`);
  });

});
