import { Component, OnInit } from '@angular/core';
import { DayC } from 'material-calendar';
import { GolyasakkEvent } from '../eventcalendar/golyasakkEvents';
import { GolyasakkNews } from './golyasakkNews';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const attributeMapping = {
  title: "title",
  description: "description",
  img: "img",
  date: "date"
};

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: Observable<GolyasakkNews[]>;

  golyasakkEvents: Observable<GolyasakkEvent[]>;

  dataSource: DayC[] = []

  freestyleChessColor = '#0167c7';
  trainingEventColor = '#01a7ca';
  championshipColor = '#aa67c7';

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {
    this.news = this.googleSheetsDbService.get<GolyasakkNews>(environment.spreadsheetConf.spreadsheetId, environment.spreadsheetConf.newsWorksheetName, attributeMapping)
    this.golyasakkEvents = this.googleSheetsDbService.get<GolyasakkEvent>(environment.spreadsheetConf.spreadsheetId, environment.spreadsheetConf.eventsWorksheetName, attributeMapping)
  }

  eventClick(event: any) {
    console.log(event.day.toolTip);
    window.open(event.day.toolTip.split('\n')[1]);
  }

  ngOnInit(): void {
    this.golyasakkEvents.subscribe(e => {
      e.forEach((d) => {
        this.dataSource.push({
          date: this.getDay(d.year, d.month, d.day),
          backgroundColor: d.color,
          toolTip: d.title + '\n' + d.url
        })
      });
    });
  }

  getDay(year: number, month: number, day: number): number {
    const dateToSet = new Date();
    dateToSet.setFullYear(year);
    dateToSet.setMonth(month - 1);
    dateToSet.setDate(day);
    dateToSet.setHours(0);
    dateToSet.setMinutes(0);
    dateToSet.setSeconds(0);
    dateToSet.setMilliseconds(0);
    return dateToSet.getTime();
  }
}
