import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalComponent } from './digital.component';
import {TwoDigitsPipe} from "../../shared/pipes/two-digits.pipe";
import {ClockState, DEFAULT_CLOCK_STATE} from "../../shared/interfaces/clock-state";

describe('DigitalComponent', () => {
  let component: DigitalComponent;
  let fixture: ComponentFixture<DigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalComponent, TwoDigitsPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Digital Component Clock state should change', () => {

    const newClockState: ClockState = {
      Hours: 10,
      Minutes: 50,
      Seconds: 10
    };

    component.clockState = newClockState;
    fixture.detectChanges();

    expect(JSON.stringify(component.clockState)).not.toEqual(JSON.stringify(DEFAULT_CLOCK_STATE));
  });

});
