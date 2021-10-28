import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Guid} from "../../shared/helpers/guid";

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.scss']
})
export class CustomDropDownComponent implements OnInit {

  @Input() name: string = '';

  @Input() list: number[] = [];

  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>()

  @Input() id: string = Guid.newGuid().toString();

  constructor() { }
  ngOnInit(): void {}

  emitChanges(): void {
    this.valueChange.emit(this.value);
  }


}
