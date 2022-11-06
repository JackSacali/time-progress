import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { DataService, Message, TimePeriod } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getTimePeriods(): TimePeriod[] {
    return this.data.getTimePeriods();
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>): void {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }
}
