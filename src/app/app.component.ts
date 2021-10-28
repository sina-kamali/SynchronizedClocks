import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClockState, DEFAULT_CLOCK_STATE} from "./shared/interfaces/clock-state";
import {ThemeService} from "./shared/services/theme.service";
import {CommonService} from "./shared/services/common.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private currentClockState: ClockState = this.commonService.getObjectDeepCopy(DEFAULT_CLOCK_STATE);
  private clockInterval: any = null;

  constructor(public themeService: ThemeService, private commonService: CommonService) {}

  ngOnInit(): void {
    // On the first load get current time
    const now = new Date()
    const newClockState: ClockState = {
      Hours: now.getHours(),
      Minutes: now.getMinutes(),
      Seconds: now.getSeconds()
    };
    // Set the clocks times
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
    // Set everything back to default
    this.clearState();
    // Update the current clock state
    this.currentClockState = this.commonService.getObjectDeepCopy(clockState);
    // Start the live clock
    this.startClock();
  }

  private clearState(): void {
    // Clear the interval
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
    // Set the clock state to default
    this.currentClockState = this.commonService.getObjectDeepCopy(DEFAULT_CLOCK_STATE);
  }

  private startClock(): void {

    const clock = (): void => {

      // Add a second
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

      // Get deep copy from the object
      this.currentClockState = this.commonService.getObjectDeepCopy(this.currentClockState);
    }
    // Set the interval 1s
    this.clockInterval = setInterval(clock, 1000);
  }

  // =========================== Getter and Setters ====================

  get clockDetails(): ClockState {
    return this.currentClockState;
  }
}
