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

  golyasakkEvents: GolyasakkEvent[] = []
  dataSource: DayC[] = []

  freestyleChessColor = '#0167c7';
  trainingEventColor = '#01a7ca'; 
  championshipColor = '#aa67c7';

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { 
    this.news = this.googleSheetsDbService.get<GolyasakkNews>(environment.spreadsheetConf.spreadsheetId, environment.spreadsheetConf.worksheetName, attributeMapping)
  }

  eventClick(event: any) {
    console.log(event.day.toolTip);
    window.open(event.day.toolTip.split('\n')[1]);
  }

  ngOnInit(): void {

    this.golyasakkEvents.push({ 
      title: "Újévi sakkozás", 
      url: 'https://www.facebook.com/golyasakk/', 
      year: 2022,
      month: 1,
      day: 16,
      color: this.freestyleChessColor
    })   

    this.golyasakkEvents.push({ 
      title: "Edzes", 
      url: 'https://www.facebook.com/golyasakk/', 
      year: 2022,
      month: 1,
      day: 23,
      color: this.trainingEventColor
    })  

    this.golyasakkEvents.forEach((d) => {
        this.dataSource.push({
          date: this.getDay(d.year, d.month, d.day),
          backgroundColor: d.color,
          toolTip: d.title + '\n' + d.url
        })
    });
  }

  getToday(): number {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    return today.getTime();
  }

  getDay(year: number, month: number, day: number): number {
    const dateToSet = new Date();
    dateToSet.setFullYear(year);
    dateToSet.setMonth(month-1);
    dateToSet.setDate(day);
    dateToSet.setHours(0);
    dateToSet.setMinutes(0);
    dateToSet.setSeconds(0);
    dateToSet.setMilliseconds(0);
    return dateToSet.getTime();
  }
}
