import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClockState, DEFAULT_CLOCK_STATE} from "./shared/interfaces/clock-state";
import {ThemeService} from "./shared/services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private currentClockState: ClockState = {...DEFAULT_CLOCK_STATE};
  newtClockState: ClockState = {...DEFAULT_CLOCK_STATE};
  private clockInterval: any = null;

  constructor(public themeService: ThemeService) {
  }

  ngOnInit(): void {
    const now = new Date()
    const newClockState: ClockState = {
      Hours: now.getHours(),
      Minutes: now.getMinutes(),
      Seconds: now.getSeconds()
    };
    this.overrideClockState(newClockState);
  }

  ngOnDestroy(): void {
    // Clean up
    this.clearState();
  }

  overrideClockState(clockState: ClockState): void {
    if (!clockState) {
      return;
    }
    this.clearState();
    this.currentClockState = {...clockState};
    this.startClock();
  }

  private clearState(): void {
    // Clear the interval
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
    // Set the clock state to default
    this.currentClockState = {...DEFAULT_CLOCK_STATE};
    this.newtClockState = {...DEFAULT_CLOCK_STATE};
  }

  private startClock(): void {
    const clock = (): void => {

      this.currentClockState.Seconds++;

      if (this.currentClockState.Seconds === 60) {
        this.currentClockState.Minutes++;
        this.currentClockState.Seconds = 0;
      }
      if (this.currentClockState.Minutes === 60) {
        this.currentClockState.Hours++;
        this.currentClockState.Minutes = 0;
        this.currentClockState.Seconds = 0;
      }
      if (this.currentClockState.Hours === 24) {
        this.currentClockState.Hours = 0;
        this.currentClockState.Minutes = 0;
        this.currentClockState.Seconds = 0;
      }
      this.currentClockState = {...this.currentClockState};
    }
    this.clockInterval = setInterval(clock, 1000);
  }

  // =========================== Getter and Setters ====================

  get clockDetails(): ClockState {
    return this.currentClockState;
  }
}
