import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ClockState} from "../../shared/interfaces/clock-state";

@Component({
  selector: 'app-analog',
  templateUrl: './analog.component.html',
  styleUrls: ['./analog.component.scss']
})
export class AnalogComponent implements OnInit {

  @Input() set clockState(clockState: ClockState) {
    if (!clockState) {
      return
    }
    this.adjustClockHandles(clockState);
  }

  @Output() clockStateChange = new EventEmitter<ClockState>();


  readonly DEFAULT_CLOCK_HAND_DEGREE = 'rotate(0deg)'
  hourDegrees: string = this.DEFAULT_CLOCK_HAND_DEGREE;
  minsDegrees: string = this.DEFAULT_CLOCK_HAND_DEGREE;
  secondsDegrees: string = this.DEFAULT_CLOCK_HAND_DEGREE;

  constructor() { }

  ngOnInit(): void {}

  emitChanges(clockState: ClockState): void {
    this.adjustClockHandles(clockState);
    this.clockStateChange.emit(clockState)
  }


  private adjustClockHandles(clockState: ClockState): void {
    this.secondsDegrees = `rotate(${((clockState.Seconds / 60) * 360) + 90}deg)`;
    this.minsDegrees = `rotate(${((clockState.Minutes / 60) * 360) + ((clockState.Seconds /60)*6) + 90}deg)`;
    this.hourDegrees = `rotate(${((clockState.Hours / 12) * 360) + ((clockState.Minutes/60)*30) + 90}deg)`;
  }
}
