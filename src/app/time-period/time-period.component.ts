import { Component, OnInit, Input } from '@angular/core';
import { TimePeriod } from '../services/data.service';

@Component({
  selector: 'app-time-period',
  templateUrl: './time-period.component.html',
  styleUrls: ['./time-period.component.scss'],
})
export class TimePeriodComponent implements OnInit {
  @Input() timePeriod: TimePeriod;
  progressPercentage = 0;

  constructor() { }

  ngOnInit() {
    this.progressPercentage = this.timePeriod
      ? this.getProgress(this.timePeriod.startDate, this.timePeriod.endDate)
      : 0;
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  getProgress(start: Date, end: Date): number {
    const now = new Date().getTime();
    const totalPeriod = end.getTime() - start.getTime();
    const passedPeriod = now - start.getTime();

    return +(passedPeriod / totalPeriod).toFixed(4);
  }
}
