import { Injectable } from '@angular/core';
import {
  endOfQuarter,
  endOfMonth,
  endOfWeek,
  endOfYear,
  startOfMonth,
  startOfQuarter,
  startOfWeek,
  startOfYear,
} from 'date-fns'

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

export interface TimePeriod {
  id: number;
  startDate: Date;
  endDate: Date;
  title: string;
  color: string;
  notify: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  public timePeriods: TimePeriod[] = [
    {
      id: 1,
      startDate: this.getTodayStart(),
      endDate: this.getTodayEnd(),
      title: 'Today',
      color: 'string;',
      notify: false,
    },
    {
      id: 2,
      startDate: this.getWeekStart(1),
      endDate: this.getWeekEnd(1),
      title: 'This week',
      color: 'string;',
      notify: false,
    },
    {
      id: 3,
      startDate: this.getMonthStart(),
      endDate: this.getMonthEnd(),
      title: 'This month',
      color: 'string;',
      notify: false,
    },
    {
      id: 4,
      startDate: this.getQuarterStart(),
      endDate: this.getQuarterEnd(),
      title: 'This quarter',
      color: 'string;',
      notify: false,
    },
    {
      id: 5,
      startDate: this.getYearStart(),
      endDate: this.getYearEnd(),
      title: 'This year',
      color: 'string;',
      notify: false,
    },
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public getTimePeriods(): TimePeriod[] {
    return this.timePeriods;
  }

  public getTimePeriodId(id: number): TimePeriod {
    return this.timePeriods[id];
  }

  private getTodayStart(): Date {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }

  private getTodayEnd(): Date {
    const date = new Date();
    date.setHours(23, 59, 59, 999);
    return date;
  }

  private getWeekStart(weekStartsOn: 0 | 2 | 3 | 4 | 5 | 1 | 6): Date {
    // TODO: map weekdays to numbers 0 is Sunday
    const date = new Date();
    return startOfWeek(date, { weekStartsOn });
  }

  private getWeekEnd(weekStartsOn: 0 | 2 | 3 | 4 | 5 | 1 | 6): Date {
    // TODO: map weekdays to numbers 0 is Sunday
    const date = new Date();
    return endOfWeek(date, { weekStartsOn });
  }

  private getMonthStart(): Date {
    const date = new Date();
    return startOfMonth(date);
  }

  private getMonthEnd(): Date {
    const date = new Date();
    return endOfMonth(date);
  }

  private getQuarterStart(): Date {
    const date = new Date();
    return startOfQuarter(date);
  }

  private getQuarterEnd(): Date {
    const date = new Date();
    return endOfQuarter(date);
  }

  private getYearStart(): Date {
    const date = new Date();
    return startOfYear(date);
  }

  private getYearEnd(): Date {
    const date = new Date();
    return endOfYear(date);
  }
}
