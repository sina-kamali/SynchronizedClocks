import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ClockState, DEFAULT_CLOCK_STATE} from "../../shared/interfaces/clock-state";
import {CommonService} from "../../shared/services/common.service";

@Component({
  selector: 'app-custom-time-input',
  templateUrl: './custom-time-input.component.html',
  styleUrls: ['./custom-time-input.component.scss']
})
export class CustomTimeInputComponent implements OnInit {

  clockState: ClockState = this.commonService.getObjectDeepCopy(DEFAULT_CLOCK_STATE);

  @Output() clockStateChange = new EventEmitter<ClockState>();

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {}

  getNumberArray(length: number, isHours: boolean = false): number[] {

    const numbers: number[] = [];
    for (let i = 0; i < length; i++) {
      if ((i === 0 && !isHours) || i !== 0) {
        numbers.push(i);
      }
    }
    // if it's hours drop down we add the 0 at the end
    if (isHours) {
      numbers.push(0);
    }
    return numbers;
  }

  emitChanges(): void {
    this.clockStateChange.emit(this.clockState);
    this.clockState = this.commonService.getObjectDeepCopy(DEFAULT_CLOCK_STATE);
  }



}
