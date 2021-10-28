export interface ClockState {
  Hours: number;
  Minutes: number;
  Seconds: number;
}

export const DEFAULT_CLOCK_STATE: ClockState = {
  Hours: 0,
  Minutes: 0,
  Seconds: 0
};
