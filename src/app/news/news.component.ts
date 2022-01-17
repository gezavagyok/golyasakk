import { Component, OnInit } from '@angular/core';
import { DayC } from 'material-calendar';
import { GolyasakkEvent } from '../eventcalendar/golyasakkEvents';
import { GolyasakkNews } from './golyasakkNews';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const newsAttributeMapping = {
  title: "title",
  description: "description",
  img: "img",
  date: "date"
};

const eventsAttributeMapping = {
  title: "title",
  url: "url",
  year: "year",
  month: "month",
  day: "day",
  color: "color"
};

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: Observable<GolyasakkNews[]>;

  dataSource: Observable<DayC[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {
    this.news = this.googleSheetsDbService.get<GolyasakkNews>(environment.spreadsheetConf.spreadsheetId, environment.spreadsheetConf.newsWorksheetName, newsAttributeMapping);
    this.dataSource = this.googleSheetsDbService.get<GolyasakkEvent>(environment.spreadsheetConf.spreadsheetId, environment.spreadsheetConf.eventsWorksheetName, eventsAttributeMapping)
      .pipe(map(d => d.map(gevent => {
        return {
          date: this.getDay(gevent.year, gevent.month, gevent.day),
          backgroundColor: gevent.color,
          toolTip: gevent.title + '\n' + gevent.url
        };
      })));
  }

  eventClick(event: any) {
    console.log(event.day.toolTip);
    window.open(event.day.toolTip.split('\n')[1]);
  }

  ngOnInit(): void {
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
