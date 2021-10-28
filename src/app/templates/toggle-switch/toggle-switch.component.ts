import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() value: boolean | undefined;
  @Output() valueChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

}
