import { Component, OnInit, Input } from '@angular/core';
import { TimePeriod } from '../services/data.service';

@Component({
  selector: 'app-time-period',
  templateUrl: './time-period.component.html',
  styleUrls: ['./time-period.component.scss'],
})
export class TimePeriodComponent implements OnInit {
  @Input() timePeriod: TimePeriod;

  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  getProgress(): number {
    const now = new Date().getTime();
    const {startDate, endDate} = this.timePeriod;
    const totalValue = endDate.getTime() - startDate.getTime();
    const partialValue = now - startDate.getTime();

    console.log("🚀 ~ file: time-period.component.ts ~ line 28 ~ TimePeriodComponent ~ getProgress ~ (100 * partialValue) / totalValue", (100 * partialValue) / totalValue)
    return (partialValue) / totalValue;

  }
}
