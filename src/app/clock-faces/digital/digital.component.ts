import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ClockState, DEFAULT_CLOCK_STATE} from "../../shared/interfaces/clock-state";

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.scss']
})
export class DigitalComponent implements OnInit {

  @Input() clockState: ClockState = DEFAULT_CLOCK_STATE;
  @Output() clockStateChange = new EventEmitter<ClockState>()
  constructor() { }

  ngOnInit(): void {}

  emitChanges(clockState: ClockState): void {
    this.clockStateChange.emit(clockState)
  }

}
