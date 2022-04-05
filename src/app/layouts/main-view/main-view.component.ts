import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/usersData/userData';
import * as moment from 'moment';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  users: Array<{ name: string; designation: string }>;
  dat = moment(Date.now());
  numOfDays: Number = 0;
  today: Number = 0;
  daysArray: Array<any> = [];
  dayNameArray: Array<any> = [];
  colorArray: Array<any> = [
    {
      color: '#090738',
      bgColor: 'rgba(9,7,56,0.3)',
    },
    {
      color: '#ffd700',
      bgColor: 'rgba(255,215,0,0.3)',
    },
    {
      color: '#1ad3fb',
      bgColor: 'rgba(26,211,251,0.3)',
    },
    {
      color: '#ff8c00',
      bgColor: 'rgba(255,140,0,0.3)',
    },
  ];
  progressBArray: Array<any> = [];
  taskArray: Array<any> = [
    'Design a landing page',
    'Create dashboard',
    'Send emails to new employees',
    'Draft a BRD for the next project',
    'Design a banner for recruitment',
    'Create a design system',
    'Set up meetings for the week',
    'Close 3 backlogs items',
    'Create a new repository on azure',
    'Close all completed activities on azure',
  ];
  totalProgress: number = 0;

  constructor() {
    this.users = Users;
  }

  async ngOnInit() {
    let month = this.dat.month();
    let year = this.dat.year();
    let day = this.dat.date();
    console.log('day:' + day);
    this.numOfDays = day;
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    console.log(daysInMonth);
    let cDay = day;
    console.log('cDay:' + cDay);
    let bDay = day;
    this.today = bDay;
    if (day == daysInMonth) {
      while (this.daysArray.length < 18) {
        await this.addForward(cDay);
        cDay--;
      }
    }
    if (day < daysInMonth) {
      let diffForward = 7;
      for (let i = 0; i <= diffForward; i++) {
        await this.addBackward(cDay + i);
      }
      if (this.daysArray.length < 17) {
        let diffBack = 17 - this.daysArray.length;
        for (let j = 1; j <= diffBack; j++) {
          (await bDay) - 1 <= 0
            ? this.addForward(bDay - 1 + 31)
            : this.addForward(bDay - 1);
          bDay--;
        }
      }
      await this.getName(year, month, day);
    }
    console.log('days array: ' + this.daysArray);

    this.progBarGenerate();
  }

  async addForward(data: number) {
    this.daysArray.unshift(data);
  }

  async addBackward(data: number) {
    this.daysArray.push(data);
  }

  async getName(a: number, b: number, c: number) {
    this.daysArray.forEach((element) => {
      console.log('element: ' + element);
      let name = null;
      element > 20 && element <= 31
        ? (name = new Date(a, b - 1, element + 1).toUTCString())
        : (name = new Date(a, b, element + 1).toUTCString());
      console.log(name);
      this.dayNameArray.push(name.slice(0, 1));
    });
  }

  progBarGenerate() {
    for (let i = 0; i < 10; i++) {
      let random = Math.random() * (15 - 6 + 1) + 6;
      random = Math.floor((random / 17) * 100);
      let randomPositionStart = random - 75;
      let randomPositionEnd = random - 55;
      console.log(Math.floor(random));
      let colorIndex = this.random(3, 0);
      let array = {
        progress: random,
        positionStart: randomPositionStart,
        positionEnd: randomPositionEnd,
        task: this.taskArray[i],
        bgColor: this.colorArray[colorIndex].bgColor,
        color: this.colorArray[colorIndex].color,
      };
      this.progressBArray.push(array);
      console.log(this.progressBArray);
    }
    this.incrementProgress();
  }

  random(max: any, min: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  incrementProgress() {
    let max = 100;
    setInterval(() => {
      this.progressBArray.forEach((res) => {
        let temp = res.progress + this.random(30, 10);
        if (temp > max) {
          temp = 100;
        }
        res.progress = temp;
      });
      this.getAverage(this.progressBArray);
    }, 1500);
  }

  getAverage(data: any) {
    let sum = 0;
    this.progressBArray.forEach((res) => {
      sum += res.progress;
    });
    this.totalProgress = sum / 10;
  }
  // returnActive(data: any) {
  //   let day = this.dat.date();
  //   if (data === this.today) {
  //     return 'active-date';
  //   }
  // }
}
